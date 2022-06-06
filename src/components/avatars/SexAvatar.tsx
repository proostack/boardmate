import { Box, Image, Text } from 'native-base'
import React from 'react'

interface Props{
  sex:string;
  image:any;
  choose:boolean
}
const SexAvatar = (props:Props):JSX.Element => {
  return (
    <Box>
    <Box h={120} w={120} bgColor={props.choose?"accent_bg.50":"#F9F9FA"} borderRadius={60} justifyContent="center" alignItems="center">
      <Image source={props.image} alt="avatar"/>
    </Box>
    <Text mt={26} fontFamily="ReadexProRegular" color="#393939" textAlign={"center"} fontSize={16} textTransform={"capitalize"}>{props.sex}</Text>
    </Box>
  )
}

export default SexAvatar