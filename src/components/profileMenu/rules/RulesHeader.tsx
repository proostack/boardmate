import React from 'react'
import {  Heading } from "native-base";

interface Props{
  children:string
}


const RulesHeader = ({children}:Props):JSX.Element => {
  return (
    <Heading fontSize={16} color={"white"}>
      {children}
    </Heading>
  )
}

export default RulesHeader