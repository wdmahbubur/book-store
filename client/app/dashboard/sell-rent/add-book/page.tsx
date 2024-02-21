/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useMutation } from "@apollo/client";
import Button from "@components/Button";
import FileUploadComponent from "@components/FileUploadComponent";
import { InputComponent } from "@components/InputComponent";
import SelectComponent from "@components/SelectComponent";
import { TextareaComponent } from "@components/TextareaComponent";
import { ADDNEWBOOK } from "@graphql/book";
import { useStore } from "@lib/useStore";
import axios from "axios";
import { useRef, useState } from "react";

const page = () => {
  const [rent, setRent] = useState("No");
  const [sell, setSell] = useState("No");
  const { setAlert } = useStore();
  const addNewBookForm = useRef<HTMLFormElement>(null);
  const [addNewBook, { loading }] = useMutation(ADDNEWBOOK, {
    errorPolicy: "all",
    onError: (err) => {
      setAlert("error", err.message);
    },
    onCompleted: (data) => {
      setAlert("success", data.addNewBook.message);
      // clear form
      addNewBookForm.current?.reset();
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const title = formData.get("title");
      const author = formData.get("author");
      const description = formData.get("description");
      const genre = formData.get("genre");
      const stock = formData.get("stock");
      const ISBN = formData.get("ISBN");
      const show = formData.get("show");
      const rentPrice = formData.get("rentPrice");
      const sellPrice = formData.get("sellPrice");
      const rent = formData.get("rent");
      const sell = formData.get("sell");

      const formData2 = new FormData();
      const image = e.currentTarget?.cover?.files[0];
      formData2.append("image", image);

      axios
        .post(process.env.NEXT_PUBLIC_SERVER_URL + "/image-upload", formData2)
        .then((res) => {
          const cover = res.data.image;

          // Add new book
          addNewBook({
            variables: {
              title,
              author,
              description,
              genre,
              stock: parseInt(stock as string),
              ISBN,
              show,
              rent,
              sell,
              rentPrice: parseFloat(rentPrice as string),
              sellPrice: parseFloat(sellPrice as string),
              cover,
            },
          });
        })
        .catch((err) => {
          setAlert("error", err.message);
        });
    } catch (err: any) {
      setAlert("error", err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Add Book For Sell Or Rent</h1>
      <div className="mt-4">
        <form
          className="grid grid-cols-2 gap-4"
          id="addNewBook"
          ref={addNewBookForm}
          onSubmit={handleSubmit}
        >
          <div>
            <InputComponent
              type="text"
              label="Title"
              placeholder="Enter Title"
              id="title"
              name="title"
              required
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
            />
          </div>
          <div className="col-span-2">
            <TextareaComponent
              label="Description"
              id="description"
              name="description"
              placeholder="Enter Description"
              rows={4}
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
            />
          </div>
          <div>
            <SelectComponent
              label="Show Display"
              id="show"
              name="show"
              required
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
              value={rent}
              onChange={(e) => setRent(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </SelectComponent>
          </div>
          <div>
            <SelectComponent
              label="Sell"
              id="sell"
              name="sell"
              required
              value={sell}
              onChange={(e) => setSell(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </SelectComponent>
          </div>
          <div>
            {rent == "Yes" && (
              <InputComponent
                type="number"
                label="Rent Price"
                id="rentPrice"
                name="rentPrice"
                placeholder="Enter Rent Price"
                required // Convert number to string
              />
            )}
          </div>
          <div>
            {sell == "Yes" && (
              <InputComponent
                type="number"
                label="Sell Price"
                id="sellPrice"
                name="sellPrice"
                placeholder="Enter Sell Price"
                required
              />
            )}
          </div>

          <div className="col-span-2">
            <FileUploadComponent
              labelText="Drag and Drop book cover here"
              accept="image/*"
              maximumSize={2}
              name="cover"
            />
          </div>

          <div className="col-span-2">
            <Button
              type="submit"
              customClass="w-full text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100"
              disabled={loading}
            >
              Add Book
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
