"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const user_schema_1 = require("./schema/user.schema");
const user_resolver_1 = require("./resolver/user.resolver");
exports.typeDefs = [user_schema_1.userTypeDefs];
exports.resolvers = [user_resolver_1.userResolvers];
//# sourceMappingURL=graphql.js.map