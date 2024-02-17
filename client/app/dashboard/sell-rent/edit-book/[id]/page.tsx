"use client";

import FileUploadComponent from "@components/FileUploadComponent";
import { InputComponent } from "@components/InputComponent";
import SelectComponent from "@components/SelectComponent";
import { getBookById } from "@lib/fake-data";
import { useState } from "react";

interface book {
  id: string;
  title: string;
  cover: string;
  rent: string;
  author: string;
  sellPrice: number;
  rentPrice: number;
  genre: string;
  description?: string;
  stock: number;
  ISBN: string;
  show: string;
  sold: string;
  seller: {
    id: string;
    name: string;
    image_url: string;
  };
}

const page = ({ params }: { params: { id: string } }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [fileName, setFileName] = useState("");
  const book = getBookById(params.id) as book;
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Book</h1>
      <div className="mt-4">
        <form action="" className="grid grid-cols-2 gap-4">
          <div>
            <InputComponent
              type="text"
              label="Title"
              placeholder="Enter Title"
              id="title"
              name="title"
              required
              value={book.title}
            />
          </div>
          <div>
            <InputComponent
              type="text"
              label="Author"
              placeholder="Enter Author Name"
              id="author"
              name="author"
              required
              value={book.author}
            />
          </div>
          <div>
            <InputComponent
              type="text"
              label="Genre"
              placeholder="Enter Genre"
              id="genre"
              name="genre"
              required
              value={book.genre}
            />
          </div>
          <div>
            <InputComponent
              type="number"
              label="Stock"
              placeholder="Enter Available Stock"
              id="stock"
              name="stock"
              required
              value={book.stock.toString()} // Convert number to string
            />
          </div>
          <div>
            <InputComponent
              type="text"
              label="ISBN"
              placeholder="Enter ISBN"
              id="ISBN"
              name="ISBN"
              required
              value={book.ISBN}
            />
          </div>
          <div>
            <SelectComponent
              label="Show Display"
              id="show"
              name="show"
              required
              value={book.show}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </SelectComponent>
          </div>
          <div>
            <SelectComponent
              label="Rent"
              id="rent"
              name="rent"
              required
              value={book.rent}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </SelectComponent>
          </div>
          <div>
            <SelectComponent
              label="Sold"
              id="sold"
              name="sold"
              required
              value={book.sold}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </SelectComponent>
          </div>
          <div>
            {book.rent == "Yes" && (
              <InputComponent
                type="number"
                label="Rent Price"
                id="rentPrice"
                name="rentPrice"
                required
                value={book.rentPrice.toString()} // Convert number to string
              />
            )}
          </div>
          <div>
            {book.sold == "Yes" && (
              <InputComponent
                type="number"
                label="Sold Price"
                id="soldPrice"
                name="soldPrice"
                required
                value={book.sellPrice.toString()} // Convert number to string
              />
            )}
          </div>

          <div className="col-span-2">
            <FileUploadComponent
              labelText="Drag and Drop book cover here"
              filename={fileName}
              accept="image/*"
              maximumSize={2}
              onFileChange={handleFileChange}
            />
          </div>

          <div className="col-span-2">
            <button className="bg-primary-500 text-white p-2 rounded w-full">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
