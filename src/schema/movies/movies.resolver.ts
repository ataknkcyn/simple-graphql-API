import mongoose, { Schema } from "mongoose";
import { MovieService } from "../../service/movie.service";

export type Movie = {
	id: number;
	name: string;
	releaseDate: string;
	rating: Rating;
	user: mongoose.Types.ObjectId;
	movie: mongoose.Types.ObjectId;
};

export type Movies = [Movie];

export type Rating = {
	value: number;
	comment: string;
};

export type Ratings = [Rating];

export type DeletePayload = {
	deleted: boolean;
};

const movieService = new MovieService();

export const MovieResolver = {
	Query: {
		movies: (_: any, args: any, context: any): Promise<Movie[]> => {
			return movieService.listMovies(context.user.id);
		},
	},
	Mutation: {
		createMovie: async (_: any, args: any, context: any): Promise<Movie> => {
			return await movieService.createMovie(args, context.user.id);
		},
		updateMovie: async (_: any, args: any, context: any): Promise<Movie> => {
			return await movieService.updateMovie(args, context.user.id);
		},
		deleteMovie: async (id: String): Promise<Movie> => {
			return await movieService.deleteMovie(id);
		},
	},
};
