export const bookTypeDefs = `
    type Book {
        id: Int!
        title: String!
        author: String!
        description: String
        cover: String
        genre: String
        pages: Int
        rent: String
        sell: String
        stock: Int
        rentPrice: Float
        sellPrice: Float
        ISBN: String
        seller: User
        sellerId: Int!
        createdAt: String
        updatedAt: String
    }

    type Query {
        books( id: Int
        title: String
        author: String
        description: String
        cover: String
        genre: String
        pages: Int
        rent: String
        sell: String
        stock: Int
        rentPrice: Float
        sellPrice: Float
        ISBN: String
        sellerId: Int
        createdAt: String
        updatedAt: String): [Book!]!
        getAuthenticatedUserBooks: [Book!]!
    }

    type addNewBookResponse {
        message: String!
        book: Book!
    }

    type Mutation {
        addNewBook(title: String!,
            author: String!,
            description: String,
            cover: String,
            genre: String,
            pages: Int,
            rent: String,
            sell: String,
            stock: Int,
            rentPrice: Float,
            sellPrice: Float,
            ISBN: String,
            ): addNewBookResponse!
    }
`;