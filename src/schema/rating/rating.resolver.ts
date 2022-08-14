import { RatingService } from "../../service/rating.service";

export type Rating = {
	id: number;
	value: number;
	comment: string;
};
const ratingService = new RatingService();
export const RatingResolver = {
	Mutation: {
		createRating: async (_: any, args: any, context: any): Promise<Rating> => {
			return await ratingService.createRating(args, context.user.id);
		},
		updateRating: async (_: any, args: any, context: any): Promise<Rating> => {
			return await ratingService.updateRating(args, context.user.id);
		},
		deleteRating: async (_: any, args: any, context: any): Promise<Rating> => {
			return await ratingService.deleteRating(args, context.user.id);
		},
	},
};
