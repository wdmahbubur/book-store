import prisma from '../db/Prisma';
import { Book } from '../types/book.type';

const addNewBook = async (Book:Book) => {
    const newBook = await prisma.books.create({
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
}

const getBooks = async (query:any) => {
    const books = await prisma.books.findMany({
        include: {
            seller: true,
        },
        where: {
            OR: [
                { rent: query.rent },
                { sell: query.sell }
            ]
        },
    });
    return books;
}

export { addNewBook, getBooks };