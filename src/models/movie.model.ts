import { Schema, model } from "mongoose";
import { Movie } from "../schema/movies";
import { IRating } from "./rating.model";

export const MovieSchema = new Schema<Movie>({
	name: {
		type: String,
		required: true,
	},
	releaseDate: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	rating: {
		type: Schema.Types.ObjectId,
		ref: "Rating",
	},
});

export const MovieRepo = model<Movie>("Movie", MovieSchema);
