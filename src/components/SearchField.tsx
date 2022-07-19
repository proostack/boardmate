import React, { Dispatch, SetStateAction } from 'react'
import { Box, Icon, Input, Text } from "native-base";
import { FontAwesome } from '@expo/vector-icons';

interface Props{
  input:string;
  getInput:Dispatch<SetStateAction<string>>,
  bgColor?:string
}

const SearchField = ({input,getInput,bgColor}:Props) => {
  return (
    <Box>

    <Input onChangeText={getInput} value={input} bgColor={bgColor?bgColor:"#F9F9FA"} border={8} variant="unstyled" placeholderTextColor={"rgba(179, 179, 179, 1)"} InputLeftElement={!input?<Icon ml={5} as={<FontAwesome name="search" size={24} color="green.500" />}/>:<></>} placeholder='Search for a friend' w="100%" h="66" fontSize={16}  pl={5} />
 
  </Box>
  )
}

export default SearchField