export const userTypeDefs = `
    type User {
        id: Int!
        name: String!
        email: String!
        phone_number: String
        role_name: String!
        avatar: String
        createdAt: String!
        updatedAt: String!
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