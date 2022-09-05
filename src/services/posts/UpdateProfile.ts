import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
mutation MyMutation {
  updateUserInput(updateUserInput: {userName: "slo"}) {
    userName
  }
}
`
// (
//   $country:String!,
//   $email:String!,
//   $fullname:String!,
//   $password:String!,
//   $phoneNumber:String!,
//   $userName:String!)
// country
// email
// fullName
// id
// isActivated
// password
// phoneNumber
// userName
// sex
