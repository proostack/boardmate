import { InMemoryCache,ApolloClient } from "@apollo/client";

const client =new ApolloClient({
  uri:"https://boardgamemate.herokuapp.com/graphql",
  cache:new InMemoryCache()
})

export default client