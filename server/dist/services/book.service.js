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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = exports.addNewBook = void 0;
const Prisma_1 = __importDefault(require("../db/Prisma"));
const addNewBook = (Book) => __awaiter(void 0, void 0, void 0, function* () {
    const newBook = yield Prisma_1.default.books.create({
        data: {
            title: Book.title,
            author: Book.author,
            description: Book.description,
            cover: Book.cover,
            genre: Book.genre,
            pages: Book.pages,
            rent: Book.rent,
            sell: Book.sell,
            stock: Book.stock,
            rentPrice: Book.rentPrice,
            sellPrice: Book.sellPrice,
            ISBN: Book.ISBN,
            sellerId: Book.sellerId,
        },
    });
    return newBook;
});
exports.addNewBook = addNewBook;
const getBooks = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield Prisma_1.default.books.findMany({
        include: {
            seller: true,
        },
        where: {
            OR: [
                { rent: query === null || query === void 0 ? void 0 : query.rent },
                { sell: query === null || query === void 0 ? void 0 : query.sell },
                { sellerId: query === null || query === void 0 ? void 0 : query.sellerId }
            ],
        },
    });
    return books;
});
exports.getBooks = getBooks;
//# sourceMappingURL=book.service.js.map