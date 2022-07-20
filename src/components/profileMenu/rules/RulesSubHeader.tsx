import React from 'react'
import { Text, Center, Box, FlatList,  Heading, Square, HStack, Circle, Image, ScrollView } from "native-base";

interface Props{
  children:string
}

const RulesSubHeader = ({children}:Props) => {
  return (
    <Text color="white">{children}</Text>
  )
}

export default RulesSubHeader