import { gql } from "@apollo/client";

const ADDNEWBOOK = gql`
  mutation AddNewBook($title: String!, $author: String!, $description: String, $cover: String, $genre: String, $rent: String, $sell: String, $stock: Int, $rentPrice: Float, $sellPrice: Float, $ISBN: String) {
  addNewBook(title: $title, author: $author, description: $description, cover: $cover, genre: $genre, rent: $rent, sell: $sell, stock: $stock, rentPrice: $rentPrice, sellPrice: $sellPrice, ISBN: $ISBN) {
    message
  }
}
`;

const GETALLBOOKS = gql`query Books($rent: String, $sell: String) {
  books(rent: $rent, sell: $sell) {
    id
    author
    title
    sellerId
    ISBN
    cover
    description
    genre
    pages
    rent
    rentPrice
    sell
    sellPrice
    stock
    updatedAt
    createdAt
    seller {
      id
      name
      email
      avatar
    }
  }
}
`;

export { ADDNEWBOOK, GETALLBOOKS };