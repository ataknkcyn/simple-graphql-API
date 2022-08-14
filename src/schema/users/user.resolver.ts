import { UserService } from "../../service/user.service";

export type User = {
	id: string;
	email: string;
	password: string;
};

export type Users = [User];

export type Login = {
	token: string;
};

export type UserInput = {
	email: string;
	password: string;
};

const userService = new UserService();

export const UserResolver = {
	Mutation: {
		register: (_: any, args: any): Promise<User> => {
			return userService.createUser(args);
		},
		login: async (_: any, args: any): Promise<Login> => {
			return {
				token: await userService.login(args),
			};
		},
	},
};
