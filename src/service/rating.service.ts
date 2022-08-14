import mongoose from "mongoose";
import { RatingRepo } from "../models";

export class RatingService {
	constructor() {}
	async createRating(args: any, userId: string): Promise<any> {
		try {
			args.movie = new mongoose.Types.ObjectId(args.movie);
			args.user = new mongoose.Types.ObjectId(userId);
			return await RatingRepo.create(args);
		} catch (error) {
			throw error;
		}
	}

	async updateRating(args: any, userId: any): Promise<any> {
		try {
			args.movie = new mongoose.Types.ObjectId(args.movie);
			userId = new mongoose.Types.ObjectId(userId);
			return await RatingRepo.findOneAndUpdate(
				{ movie: args.movie, user: userId },
				args,
				{ returnOriginal: false }
			);
		} catch (error) {
			throw error;
		}
	}
	async deleteRating(args: any, userId: any): Promise<any> {
		try {
			args.movie = new mongoose.Types.ObjectId(args.movie);
			userId = new mongoose.Types.ObjectId(userId);
			return await RatingRepo.findOneAndDelete({
				movie: args.movie,
				user: userId,
			});
		} catch (error) {
			throw error;
		}
	}
}
