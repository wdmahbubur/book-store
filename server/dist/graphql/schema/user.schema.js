"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTypeDefs = void 0;
exports.userTypeDefs = `
    type User {
        id: String!
        name: String!
        email: String!
        phone_number: String
        role_name: String!
    }

    type Query {
        users: [User!]!
        getAuthenticatedUser: User!
    }

    type SignUpResponse {
        message: String!
        user: User!
    }

    type LoginResponse {
        message: String!
        token: String!
        user: User!
    }

    type Mutation {
        signUp(name: String!, email: String!, password: String!): SignUpResponse!
        login(email: String!, password: String!): LoginResponse!
    }
`;
//# sourceMappingURL=user.schema.js.map