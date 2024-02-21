import { addNewBook, getBooks } from "../../services/book.service";
import { userResolvers } from "./user.resolver";

export const bookResolvers:any = {
    Query: {
        books: async () => {
            const books = await getBooks();
            return books;
        },
    },
    Mutation: {
        addNewBook: async (_: any, args: any, _context: any) => {
            const user = await userResolvers.Query.getAuthenticatedUser(_, args, _context);
            if (!user) {
                throw new Error("User does not exist");
            }
            console.log(user);
            args.sellerId = user.id;
            const book = await addNewBook(args);
            if (!book) {
                throw new Error("Error creating user");
            }

            return {
                message: "Your book has been added successfully!",
                book,
            };
        },
    },
}
