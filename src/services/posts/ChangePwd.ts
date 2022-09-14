import { gql } from "@apollo/client";

export const CHANGEPWD_REQ =gql `
mutation changePwd ($oldPwd:String!, $pwd:String!, $confirmPwd:String!) {
  changePasswordInput(
    changePasswordInput: {oldPassword: $oldPwd, password: $pwd, confirmPassword: $confirmPwd}
  ) {
    Message
  }
}
`