import Book from "@components/Book";
import { getAllBooks } from "@lib/fake-data";
const page = () => {
  const books = getAllBooks();
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {books.map((book, index) => (
          <Book book={book} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
