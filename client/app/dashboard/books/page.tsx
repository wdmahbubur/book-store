/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useQuery } from "@apollo/client";
import Book from "@components/Book";
import { GETALLBOOKS } from "@graphql/book";
import { useStore } from "@lib/useStore";
import { Suspense, useEffect } from "react";
const page = () => {
  const { books, setBooks } = useStore();
  const { loading, error, data } = useQuery(GETALLBOOKS, {
    variables: { rent: "Yes", sell: "Yes" },
  });
  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data, setBooks]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {books?.map((book, index) => (
        <Book book={book} key={index} />
      ))}
    </div>
  );
};

export default page;
