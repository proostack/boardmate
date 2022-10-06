import { ApolloError } from "@apollo/client"
import { TransactionNavProps, TransactionRoutes } from "./routes"

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

export type IUserProps = {
  inputForms: { label: string, input: string }[] | null;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPwdModal: React.Dispatch<React.SetStateAction<boolean>>;
  pwdError?: ApolloError,
  pwdSuccess?: {
    changePasswordInput: {
      Message: string
    }
  },
  pwdUpdateStat: boolean,
  pwdLoader: boolean
}

export type TransNavType=TransactionNavProps<'Wallet'>

export type TransactionNavItem={
  name:keyof TransactionRoutes,
  component:({navigation}:TransNavType)=>JSX.Element
}