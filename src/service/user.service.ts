import { IUser, User } from "../models";
import { UserInput } from "../schema/users";
import { Secret, sign, SignOptions } from "jsonwebtoken";
import * as fs from "fs";
export class UserService {
	constructor() {}

	async createUser(user: UserInput): Promise<any> {
		return await User.create({ email: user.email, password: user.password });
	}
	async login({ email, password }: UserInput): Promise<string> {
		const user = await User.findOne({ email });
		if (!user) {
			throw new Error("User not found");
		}
		if (user.password !== password) {
			throw new Error("Password is incorrect");
		}
		const signInOptions: SignOptions = {
			expiresIn: "1h",
		};
		try {
			const token = sign({ email, id: user._id }, "secretKey", signInOptions);
			return token;
		} catch (error) {
			throw new Error("Tokende hata oluştu");
		}
	}
}
