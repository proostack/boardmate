import { InMemoryCache,ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

console.log(process.env.BASE_URL)
const client =():ApolloClient<NormalizedCacheObject>=>{
  // Get user token from store
  const {keyToken}=useSelector((state:RootState)=>state.user)
  // Setting autthorization token if available
  return new ApolloClient({
  uri:`${process.env.BASE_URL}/graphql`,
  cache:new InMemoryCache(),
  headers:{
    authorization:keyToken?`Bearer:${keyToken}`:""
  }
})}
export default client

