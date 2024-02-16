"use client";
import { getBookById, getRelatedBooks } from "@lib/fake-data";
import Image from "next/image";
import { UsersThree, ShoppingCart, Heart, Chat } from "phosphor-react";
import { Tabs } from "keep-react";
import { useRouter } from "next/navigation";

interface book {
  id: string;
  title: string;
  cover: string;
  rent: string;
  author: string;
  sellPrice: number;
  rentPrice?: number;
  genre: string;
  description?: string;
  seller: {
    id: string;
    name: string;
    image_url: string;
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const book = getBookById(params.id) as book;
  const router = useRouter();

  const relatedBooks = getRelatedBooks(book.genre, params.id);
  const bookDetails = (id: string) => {
    router.push(`/dashboard/books/${id}`, { scroll: false });
  };
  return (
    <div className="p-4">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-9">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="col-span-4">
              <Image
                src={book.cover}
                alt={book.title}
                width={250}
                height={350}
              />
            </div>
            <div className="col-span-8">
              <h1 className="text-4xl font-semibold ">{book.title}</h1>
              <p className="text-gray-400 my-2">
                by <span className="text-primary-500">{book.author}</span>
              </p>
              <p className="text-gray-400 my-2">
                <span className="font-semibold">Genre</span> {book.genre}
              </p>
              <p className="text-gray-400 flex items-center gap-4">
                <UsersThree size={24} color="#5E718D" /> 5.73K users want this
              </p>
              <p className="text-gray-400 my-2 text-2xl">
                USD {book.sellPrice}
              </p>
              <div className="mt-4 flex items-center gap-4">
                {book.rent == "Yes" && (
                  <button className="border-primary-500 border text-primary px-4 py-2 rounded-md mr-4 hover:shadow-md hover:transform hover:scale-110 hover:duration-700">
                    Rent USD {book.rentPrice}
                  </button>
                )}
                <button className="bg-primary-500 text-white px-4 py-2 rounded-md flex items-center hover:shadow-md  hover:transform hover:scale-110 hover:duration-700">
                  <ShoppingCart size={24} color="#fff" /> Add to Cart
                </button>
              </div>
              <p className="text-gray-400 flex items-center mt-3 cursor-pointer">
                <Heart size={24} color="#5E718D" /> Add to Wishlist
              </p>
              <p className="text-gray-400 mt-4">Seller</p>
              <div className="border border-slate-200 bg-slate-50 p-4 rounded-md flex content-between items-center">
                <div className="flex items-center flex-1 gap-4">
                  <Image
                    src={book.seller.image_url}
                    alt={book.seller.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h4 className="text-gray-400">{book.seller.name}</h4>
                </div>
                <div className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-gray-600">
                  <Chat size={26} />
                  <p className="">Chat with seller</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Tabs aria-label="Keep Tabs" style="default">
              <Tabs.Item title="Description" active={true}>
                {book.description}
              </Tabs.Item>
              <Tabs.Item
                title="Reviews"
                notification={10}
                notificationColor="info"
              >
                Reviews
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <h1 className="text-xl">You may also like</h1>

          {relatedBooks.length > 0 ? (
            relatedBooks.map((book, index) => (
              <div
                className="grid grid-cols-3 gap-4 mt-4 py-4 border-b border-b-gray-50 cursor-pointer"
                key={index}
                onClick={() => bookDetails(book.id)}
              >
                <div className="col-span-1">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={100}
                    height={150}
                  />
                </div>
                <div className="col-span-2">
                  <h4 className="text-gray-400 text-lg">{book.title}</h4>
                  <p className="text-gray-400">{book.author}</p>
                  <p className="text-gray-400 font-medium mt-2">
                    USD {book.sellPrice}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No related books found</p>
          )}
        </div>
      </div>
    </div>
  );
}
