import React from 'react'
import { Text} from "native-base";

interface Props{
  children:string
}

const RulesSubHeader = ({children}:Props):JSX.Element => {
  return (
    <Text color="white">{children}</Text>
  )
}

export default RulesSubHeader