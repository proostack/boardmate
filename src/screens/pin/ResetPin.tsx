import React from 'react'
import Pin from '../../components/Pin'
import { AuthNavigationProps } from '../../types/routes'

const ResetPin = ({navigation}:AuthNavigationProps<"LoginPin">):JSX.Element => {
  const getPin=(arr:string[])=>{
    if(arr.length===4) navigation.navigate("LoginPin")
      }
  return (
    <>
    <Pin getPin={getPin} header='Reset Your Pin' headerText='Enter your new PIN'/>
    </>
  )
}

export default ResetPin