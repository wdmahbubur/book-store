import Image from "next/image";
import React from "react";

interface book {
  title: string;
  cover: string;
  isRented: boolean;
  author: string;
  sellPrice: number;
}

const Book = ({ book }: { book: book }) => {
  return (
    <div className="border border-gray-100 shadow-sm p-3 rounded-md hover:transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="h-48 relative">
        <Image
          src={book.cover}
          alt={book.title}
          className="rounded-md w-full h-full"
          width={300}
          height={400}
        />
        {book.isRented && (
          <div className="absolute top-1 left-0 px-2 bg-green-500">
            <span className="text-white text-sm">Rent</span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-400 text-sm">{book.author}</span>
        <span className="text-gray-400 text-sm">${book.sellPrice}</span>
      </div>
    </div>
  );
};

export default Book;
