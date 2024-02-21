export declare const bookTypeDefs = "\n    type Book {\n        id: Int!\n        title: String!\n        author: String!\n        description: String\n        cover: String\n        genre: String\n        pages: Int\n        rent: String\n        sell: String\n        stock: Int\n        rentPrice: Float\n        sellPrice: Float\n        ISBN: String\n        seller: User\n        sellerId: Int!\n        createdAt: String\n        updatedAt: String\n    }\n\n    type Query {\n        books( id: Int\n        title: String\n        author: String\n        description: String\n        cover: String\n        genre: String\n        pages: Int\n        rent: String\n        sell: String\n        stock: Int\n        rentPrice: Float\n        sellPrice: Float\n        ISBN: String\n        sellerId: Int\n        createdAt: String\n        updatedAt: String): [Book!]!\n        getAuthenticatedUserBooks: [Book!]!\n    }\n\n    type addNewBookResponse {\n        message: String!\n        book: Book!\n    }\n\n    type Mutation {\n        addNewBook(title: String!,\n            author: String!,\n            description: String,\n            cover: String,\n            genre: String,\n            pages: Int,\n            rent: String,\n            sell: String,\n            stock: Int,\n            rentPrice: Float,\n            sellPrice: Float,\n            ISBN: String,\n            ): addNewBookResponse!\n    }\n";
