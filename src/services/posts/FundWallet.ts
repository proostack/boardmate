import { gql } from "@apollo/client";

export const FUND_WALLET=gql`
mutation fundWalllet($amount:Int!){
  FundWalletInput(FundWalletInput: {amount: $amount}) {
    topUpLink
  }
}
`
