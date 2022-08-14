import { MovieResolver, MovieType } from "./movies";
import { RatingResolver, RatingType } from "./rating";
import { UserResolver, UserType } from "./users";

export const resolvers = [MovieResolver, UserResolver, RatingResolver];
export const typeDefs = [MovieType, UserType, RatingType];
