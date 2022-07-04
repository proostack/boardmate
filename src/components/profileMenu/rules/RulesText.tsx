import React from 'react'
import { Text, Center, Box, FlatList,  Heading, Square, HStack, Circle, Image, ScrollView } from "native-base";

interface Props{
  children:string
}
const RulesText = ({children}:Props) => {
  return (
    <Text fontSize={10} color={"white"}>
    {children}
  </Text>

  )
}

export default RulesText