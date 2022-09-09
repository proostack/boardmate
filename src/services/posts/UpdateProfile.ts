import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
mutation updateProfile ($fullName:String!, $email: String!, $country: String!, $phoneNumber: String!, $userName: String!) {
  UpdateUserInput(
  UpdateUserInput: {email: $email, fullName: $fullName, phoneNumber: $phoneNumber, userName: $userName, country: $country}) {
    fullName
    email
    country
    phoneNumber
    userName
  }
}
`
// mutation updateProfile (
//   $country:String!,
//   $email:String!,
//   $fullName:String!,
//   $phoneNumber:String!,
//   $userName:String!){
//   updateUserInput(updateUserInput: {userName: $userName, country: $country, email: $email, fullName: $fullName, phoneNumber: $phoneNumber }) {
//     userName
//     country 
//     email 
//     fullname
//     phoneNumber

//   }
// }
// country
// email
// fullName
// id
// isActivated
// password
// phoneNumber
// userName
// sex
