import { ApolloError } from "@apollo/client"

export type loginDataType = {
  loginInput: {
    token: string
  }
}

export interface ReturnAuth {
  loading: boolean,
  error?: ApolloError,
  fireMutation: any,
  called: boolean,
  data:loginDataType
} 