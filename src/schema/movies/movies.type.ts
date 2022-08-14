import { gql } from "apollo-server";

export const MovieType = gql`
	type Rating {
		value: Int!
		comment: String
	}

	type DeletePayload {
		deleted: Boolean!
	}

	type Movie {
		_id: ID!
		user: ID!
		name: String
		releaseDate: String
		rating: Rating
	}
	type Query {
		movies: [Movie]
	}
	type Mutation {
		createMovie(name: String, releaseDate: String): Movie
		updateMovie(id: ID!, name: String, releaseDate: String): Movie
		deleteMovie(id: ID!): DeletePayload
	}
`;
