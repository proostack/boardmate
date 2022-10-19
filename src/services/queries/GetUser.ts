import { useQuery, gql, ApolloError } from "@apollo/client";
// Query to get current User
const GET_USER = gql`
query MyQuery {
  currentUser {
    email
    userName
    phoneNumber
    country
    fullName
  }
}
`

export default ():{
  error?:ApolloError,
  loading:boolean,
  data:{
    currentUser:{
      email:string,
      userName:string,
      password:string,
      phoneNumber:string
      country:string
      fullName:string
    }
  },
  refetch:()=>void
}=>{
  const {error,loading,data,refetch}=useQuery(GET_USER)

  return ({error,loading,data,refetch})
}