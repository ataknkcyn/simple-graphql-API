import { gql } from "apollo-server";

export const UserType = gql`
	type User {
		_id: ID!
		email: String
		password: String
	}

	type Login {
		token: String!
	}

	input UserInput {
		email: String!
		password: String!
	}

	type Mutation {
		register(email: String, password: String): User
		login(email: String, password: String): Login
	}
`;
