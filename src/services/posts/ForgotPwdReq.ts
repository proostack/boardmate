import { gql } from "@apollo/client";

export const FORGOTPWD_REQ =gql `
mutation MyMutation ($email:String!) {
  forgetPassword(email: $email) {
    Message
  }
}
`