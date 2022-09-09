import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
mutation updateProfile (
  $fullName:String!,
  $email: String!,
  $country: String!, 
  $phoneNumber: String!,
  $userName: String!) {
  UpdateUserInput(
  UpdateUserInput: {
  email: $email,
  fullName: $fullName, 
  phoneNumber: $phoneNumber,
  userName: $userName, 
  country: $country
}) {
    fullName
    email
    country
    phoneNumber
    userName
  }
}
`