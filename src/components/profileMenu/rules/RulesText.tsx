import React from 'react'
import { Text} from "native-base";

interface Props{
  children:string
}
const RulesText = ({children}:Props):JSX.Element => {
  return (
    <Text fontSize={10} color={"white"}>
    {children}
  </Text>

  )
}

export default RulesText