/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button as ButtonK, Badge, Popover, Table } from "keep-react";
import { Plus, DotsThreeOutline, Pencil, Trash } from "phosphor-react";
import { getAllBooks } from "@lib/fake-data";
import Button from "@components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@lib/useStore";
import { useQuery } from "@apollo/client";
import { GETAUTHENTICATEDUSERBOOKS } from "@graphql/book";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();
  const { userBooks, setUserBooks } = useStore();
  const { loading, error, data } = useQuery(GETAUTHENTICATEDUSERBOOKS);
  useEffect(() => {
    if (data) {
      setUserBooks(data.getAuthenticatedUserBooks);
    }
  }, [data, setUserBooks]);
  const addNewBook = () => {
    router.push(`/dashboard/sell-rent/add-book`, { scroll: false });
  };

  const editBook = (id: number) => {
    router.push(`/dashboard/sell-rent/edit-book/${id}`, { scroll: false });
  };
  return (
    <Table showCheckbox={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">
              Your added book list
            </p>
            <Badge size="xs" colorType="light" color="gray">
              {userBooks?.length} Book
            </Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button
              customClass="text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100"
              onClick={addNewBook}
            >
              Add New Book <Plus size={22} className="ml-1" />
            </Button>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[180px]">
          <p className="text-body-6 font-medium text-metal-400">Name</p>
        </Table.HeadCell>
        <Table.HeadCell>Show</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]">Genre</Table.HeadCell>
        <Table.HeadCell>Stock</Table.HeadCell>
        <Table.HeadCell>Rent</Table.HeadCell>
        <Table.HeadCell>Sold</Table.HeadCell>
        <Table.HeadCell>ISBN</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]" />
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        {userBooks?.map((book) => (
          <Table.Row className="bg-white" key={book.id}>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {book.title}
                      </p>
                      <span>{book.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge
                colorType="light"
                //color={book.show == "Yes" ? "success" : "gray"}
                color="gray"
                dot={true}
              >
                No
                {/* {book.show} */}
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>{book.genre}</p>
            </Table.Cell>
            <Table.Cell>{book.stock}</Table.Cell>
            <Table.Cell>{book.rent}</Table.Cell>
            <Table.Cell>{book.sell}</Table.Cell>
            <Table.Cell>{book.ISBN}</Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-52 border border-metal-100 p-2"
              >
                <Popover.Container className="!mt-0 !block">
                  <ul>
                    <li className="rounded px-2 py-1 hover:bg-metal-100">
                      <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="rounded px-2 py-1 hover:bg-metal-100">
                      <button
                        className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600"
                        onClick={() => editBook(book.id)}
                      >
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                </Popover.Container>
                <Popover.Action>
                  <ButtonK type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </ButtonK>
                </Popover.Action>
              </Popover>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default page;
