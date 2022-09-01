import { useQuery, gql, ApolloError } from "@apollo/client";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const GET_USER = gql`
query MyQuery {
  currentUser {
    email
    userName
    password
  }
}
`

export default ():{
  error?:ApolloError,
  loading:boolean,
  data:{
    currentUser:{
      email:string,
      username:string,
      password:string
    }
  }
}=>{
  const {keyToken}=useSelector((state:RootState)=>state.user)
  const {error,loading,data}=useQuery(GET_USER)
  return ({error,loading,data})
}