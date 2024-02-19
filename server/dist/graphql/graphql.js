"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const user_schema_1 = require("./schema/user.schema");
const user_resolver_1 = require("./resolver/user.resolver");
const book_schema_1 = require("./schema/book.schema");
const book_resolver_1 = require("./resolver/book.resolver");
exports.typeDefs = [user_schema_1.userTypeDefs, book_schema_1.bookTypeDefs];
exports.resolvers = [user_resolver_1.userResolvers, book_resolver_1.bookResolvers];
//# sourceMappingURL=graphql.js.map