import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
mutation MyMutation($email: String!, $password: String!, $username: String!) {
  signUpInput(
    signUpInput: {email: $email, password: $password, userName: $username}
  ) {
    token
  }
}
`

