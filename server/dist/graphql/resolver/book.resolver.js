"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookResolvers = void 0;
const book_service_1 = require("../../services/book.service");
const user_resolver_1 = require("./user.resolver");
exports.bookResolvers = {
    Query: {
        books: (_, args, _context) => __awaiter(void 0, void 0, void 0, function* () {
            const books = yield (0, book_service_1.getBooks)(args);
            return books;
        }),
        getAuthenticatedUserBooks: (_, _args, _context) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield user_resolver_1.userResolvers.Query.getAuthenticatedUser(_, _args, _context);
            if (!user) {
                throw new Error("User does not exist");
            }
            const books = yield (0, book_service_1.getBooks)({ sellerId: user.id });
            return books;
        }),
    },
    Mutation: {
        addNewBook: (_, args, _context) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield user_resolver_1.userResolvers.Query.getAuthenticatedUser(_, args, _context);
            if (!user) {
                throw new Error("User does not exist");
            }
            args.sellerId = user.id;
            const book = yield (0, book_service_1.addNewBook)(args);
            if (!book) {
                throw new Error("Error creating user");
            }
            return {
                message: "Your book has been added successfully!",
                book,
            };
        }),
    },
};
//# sourceMappingURL=book.resolver.js.map