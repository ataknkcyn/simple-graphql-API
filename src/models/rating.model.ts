import mongoose, { Schema, model } from "mongoose";

export interface IRating {
	value: number;
	comment: string;
	movie: mongoose.Types.ObjectId;
	user: mongoose.Types.ObjectId;
}

const RatingSchema = new Schema<IRating>({
	value: {
		type: Number,
		required: true,
	},
	comment: {
		type: String,
		required: false,
	},
	movie: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "Movie",
		unique: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "User",
		unique: true,
	},
});

export const RatingRepo = model<IRating>("Rating", RatingSchema);
