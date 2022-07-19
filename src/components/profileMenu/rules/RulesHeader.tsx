import React from 'react'
import { Text, Center, Box, FlatList,  Heading, Square, HStack, Circle, Image, ScrollView } from "native-base";

interface Props{
  children:string
}


const RulesHeader = ({children}:Props) => {
  return (
    <Heading fontSize={16} color={"white"}>
      {children}
    </Heading>
  )
}

export default RulesHeader