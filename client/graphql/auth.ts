import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    message
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

const GETAUTHENTICATEDUSER = gql`
  query GetAuthenticatedUser {
    getAuthenticatedUser {
      id
      name
      email
      phone_number
      role_name
    }
  }
`;



export { LOGIN, SIGNUP, GETAUTHENTICATEDUSER };