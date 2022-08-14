import { gql } from "apollo-server";

export const RatingType = gql`
	type Rating {
		_id: ID!
		value: Int!
		comment: String
	}

	type DeletePayload {
		deleted: Boolean!
	}

	input RatingInput {
		movie: ID!
		value: Int!
		comment: String
	}

	type Mutation {
		createRating(movie: ID, value: Int, comment: String): Rating
		updateRating(movie: ID, value: Int, comment: String): Rating
		deleteRating(movie: ID!): DeletePayload
	}
`;
