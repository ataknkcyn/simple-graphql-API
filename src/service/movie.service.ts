import mongoose, { Mongoose, Schema } from "mongoose";
import { MovieRepo } from "../models";
import { Movie, Movies } from "../schema/movies";

export class MovieService {
	constructor() {}

	async listMovies(userId: string): Promise<Movie[]> {
		try {
			let movies = await MovieRepo.aggregate([
				{
					$match: {
						user: new mongoose.Types.ObjectId(userId),
					},
				},
				{
					$lookup: {
						from: "ratings",
						localField: "_id",
						foreignField: "movie",
						as: "rating",
					},
				},
			]).exec();
			movies.forEach((movie: any) => {
				movie.rating = movie.rating[0];
			});
			return movies;
		} catch (error) {
			throw error;
		}
	}

	async createMovie(args: Movie, userId: string): Promise<Movie> {
		args.user = new mongoose.Types.ObjectId(userId);
		return await MovieRepo.create(args);
	}

	async updateMovie(args: any, userId: any): Promise<any> {
		return await MovieRepo.findByIdAndUpdate(
			{ _id: args._id, user: userId },
			args,
			{
				returnOriginal: false,
			}
		);
	}

	async deleteMovie(args: any): Promise<any> {
		return await MovieRepo.findByIdAndDelete(args._id);
	}
}
