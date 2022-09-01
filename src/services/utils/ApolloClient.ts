import { InMemoryCache,ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const client =():ApolloClient<NormalizedCacheObject>=>{
  const {keyToken}=useSelector((state:RootState)=>state.user)
  console.log(keyToken)
  return new ApolloClient({
  uri:"https://boardgamemate.herokuapp.com/graphql",
  cache:new InMemoryCache(),
  headers:{
    authorization:keyToken?`Bearer:${keyToken}`:""
  }
})}
export default client

// getToken()