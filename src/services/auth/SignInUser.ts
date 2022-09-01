import { gql } from "@apollo/client";

export const SIGNIN_USER=gql`
mutation SignInUser($email:String!,$password:String!) {
  loginInput(loginInput: {email: $email, password: $password}) {
    token
  }
}
`