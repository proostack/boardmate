import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
query{
  characters{
   results {
     name 
     image
   location{
     name
   }
   }
 }
 }
`

export default ()=>{
  const {error,loading,data}=useQuery(GET_CHARACTERS)
  return ({error,loading,data})
}