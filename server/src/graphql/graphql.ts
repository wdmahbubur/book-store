import { userTypeDefs } from "./schema/user.schema";
import { userResolvers } from "./resolver/user.resolver";
import { bookTypeDefs } from "./schema/book.schema";
import { bookResolvers } from "./resolver/book.resolver";

export const typeDefs = [userTypeDefs, bookTypeDefs];
export const resolvers = [userResolvers, bookResolvers];