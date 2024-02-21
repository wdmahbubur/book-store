import { gql } from "@apollo/client";

const ADDNEWBOOK = gql`
  mutation AddNewBook($title: String!, $author: String!, $description: String, $cover: String, $genre: String, $rent: String, $sell: String, $stock: Int, $rentPrice: Float, $sellPrice: Float, $isbn: String) {
  addNewBook(title: $title, author: $author, description: $description, cover: $cover, genre: $genre, rent: $rent, sell: $sell, stock: $stock, rentPrice: $rentPrice, sellPrice: $sellPrice, ISBN: $isbn) {
    message
  }
}
`;