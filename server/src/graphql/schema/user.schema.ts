export const userTypeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        users: [User!]!
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