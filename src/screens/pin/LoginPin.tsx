import React from 'react'
import Pin from '../../components/Pin'
import { AuthNavigationProps } from '../../types/routes'


const LoginPin = ({navigation}:AuthNavigationProps<"LoginPin">): JSX.Element => {

  const getPin=(arr:string[])=>{
if(arr.length===4) navigation.navigate("ResetPwd")
  }

  return (
    <>
   <Pin getPin={getPin} header='Enter Your PIN' headerText='Input your pin to login' forgotText='Forgotten your old PIN?'/>
    </>
  )
}

export default LoginPin