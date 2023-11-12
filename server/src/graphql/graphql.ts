import { userTypeDefs } from "./schema/user.schema";
import { userResolvers } from "./resolver/user.resolver";

export const typeDefs = [userTypeDefs];
export const resolvers = [userResolvers];