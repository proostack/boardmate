import { InMemoryCache,ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const client =():ApolloClient<NormalizedCacheObject>=>{
  // Get user token from store
  const {keyToken}=useSelector((state:RootState)=>state.user)

  // Setting autthorization token if available
  return new ApolloClient({
  uri:"https://boardgamemate.herokuapp.com/graphql",
  cache:new InMemoryCache(),
  headers:{
    authorization:keyToken?`Bearer:${keyToken}`:""
  }
})}
export default client

