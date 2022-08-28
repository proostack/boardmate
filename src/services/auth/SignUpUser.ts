import { gql, useMutation } from "@apollo/client";

const SIGNUP_USER = gql`
mutation signUpUser {
  signUpInput(
    signUpInput: {email: "slo0102@maxmtc.me", password: "eugene1234"}
  ) {
    token
  }
}
`

export default (email:string,password:string,username:string)=>{
  const [adduser,{data,loading,error}] =useMutation(SIGNUP_USER);
  return {data,loading,error,adduser}
}