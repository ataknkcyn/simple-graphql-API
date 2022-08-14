import { model, Schema } from "mongoose";
import { Movie } from "../schema/movies";

export interface IUser {
	email: string;
	password: string;
	movie: Movie;
}

const UserSchema = new Schema<IUser>({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export const User = model<IUser>("User", UserSchema);
