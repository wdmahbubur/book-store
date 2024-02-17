/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FileUploadComponent from "@components/FileUploadComponent";
import { InputComponent } from "@components/InputComponent";
import SelectComponent from "@components/SelectComponent";
import { useState } from "react";

const page = () => {
  const [fileName, setFileName] = useState("");
  const [rent, setRent] = useState("No");
  const [sold, setSold] = useState("No");
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Add Book For Sell Or Rent</h1>
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
              label="Sold"
              id="sold"
              name="sold"
              required
              value={sold}
              onChange={(e) => setSold(e.target.value)}
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
            {sold == "Yes" && (
              <InputComponent
                type="number"
                label="Sold Price"
                id="soldPrice"
                name="soldPrice"
                placeholder="Enter Sold Price"
                required
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
