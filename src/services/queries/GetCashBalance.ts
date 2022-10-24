import { useQuery, gql, ApolloError } from "@apollo/client";
// Query to get current User
const GET_WALLET_BALANCE = gql`
query MyQuery {
  walletBalance {
 balance
  }
}
`

export default (): {
  error?: ApolloError,
  loading: boolean,
  data: {
    walletBalance: {
      balance: number
    }
  },
  refetch:()=>void
} => {
  const { error, loading, data, refetch } = useQuery(GET_WALLET_BALANCE)

  return ({ error, loading, data,refetch })
}