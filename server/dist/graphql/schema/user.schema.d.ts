export declare const userTypeDefs = "\n    type User {\n        id: Int!\n        name: String!\n        email: String!\n        phone_number: String\n        role_name: String!\n        avatar: String\n        createdAt: String!\n        updatedAt: String!\n    }\n\n    type Query {\n        users: [User!]!\n        getAuthenticatedUser: User!\n    }\n\n    type SignUpResponse {\n        message: String!\n        user: User!\n    }\n\n    type LoginResponse {\n        message: String!\n        token: String!\n        user: User!\n    }\n\n    type Mutation {\n        signUp(name: String!, email: String!, password: String!): SignUpResponse!\n        login(email: String!, password: String!): LoginResponse!\n    }\n";
