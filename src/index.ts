import { ApolloServer, AuthenticationError, gql } from "apollo-server";
import { verify } from "jsonwebtoken";
import mongoose from "mongoose";
import { connectionURI } from "./db/config";
// import { typeDefs } from "./schema/movies/movies.type";
import { typeDefs } from "./schema";
import { resolvers } from "./schema";
const {
	ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
mongoose.connect(connectionURI);

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	cache: "bounded",
	context: ({ req, res }) => {
		try {
			if (req.body["operationName"] !== "Login") {
				const token = req.headers.authorization || "";
				let user = {};
				try {
					user = verify(token, "secretKey");
					if (!user) return res.sendStatus(401).send("you must be logged in");
				} catch (error) {
					return res.sendStatus(401).send(error);
				}
				return { user };
			} else {
				return {};
			}
		} catch (error) {
			return res.sendStatus(500).send(error);
		}
	},
	plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// const getUser = (token) => {
// 	return this.user;
// };
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
