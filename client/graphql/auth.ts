import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      message
      user {
        id
        email
        name
      }
      token
    }
  }
`;

const SIGNUP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
  signUp(name: $name, email: $email, password: $password) {
    message
  }
}
`;


export { LOGIN, SIGNUP };