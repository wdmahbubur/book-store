"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface book {
  id: string;
  title: string;
  cover: string;
  isRented: boolean;
  author: string;
  sellPrice: number;
}

const Book = ({ book }: { book: book }) => {
  const router = useRouter();
  const bookDetails = (id: string) => {
    router.push(`/dashboard/books/${id}`, { scroll: false });
  };
  return (
    <div
      className="border border-gray-100 shadow-sm p-3 rounded-md hover:transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
      onClick={() => bookDetails(book.id)}
    >
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
        <span className="text-gray-400 text-sm">
          {book.title.slice(0, 22)}
          {book.title.length > 22 ? "..." : ""}
        </span>
        <span className="text-gray-400 text-sm">${book.sellPrice}</span>
      </div>
    </div>
  );
};

export default Book;
