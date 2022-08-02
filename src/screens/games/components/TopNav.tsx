import { HStack,Text } from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
interface Props{
  setShowQuit:()=>void
}
const TopNav = ({setShowQuit}:Props):JSX.Element => {
  return (
    <HStack pb="20px" pt="31px" px="31px" justifyContent="space-between" alignItems={"center"} bgColor="accent_bg.50" position={"absolute"} top={0} left={0} w="100%">
    <AntDesign onPress={setShowQuit} name="arrowleft" size={24} color="white" />
    <Text fontSize="20px" fontFamily={"ReadexProBold"} color="white">Chess</Text>
    <Feather name="info" size={24} color="white" />
  </HStack>
)
}

export default TopNav