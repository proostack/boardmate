import { useQuery, gql, ApolloError } from "@apollo/client";
// Query to get current User
const GET_COIN_BALANCE = gql`
query MyQuery {
  coinBalance {
 balance
  }
}
`

export default (): {
  error?: ApolloError,
  loading: boolean,
  data: {
    coinBalance: {
      balance: number
    }
  }
} => {
  const { error, loading, data } = useQuery(GET_COIN_BALANCE,{
    pollInterval:500
  })

  return ({ error, loading, data })
}