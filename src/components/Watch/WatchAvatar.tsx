import React from 'react'
import { Text, Center, Box, FlatList, Button, Heading, Square, HStack, Circle, Image } from "native-base";
import { ImageSourcePropType } from 'react-native';

interface Props{
  image:ImageSourcePropType;
  name:string;
}
const WatchAvatar = ({image,name}:Props):JSX.Element => {
  return (
    <Box>
    <Square borderRadius={20} size={60} bgColor={"darkTheme.50"}>
      <Circle bgColor={"white"} size={"24px"}>
      <Image size={5} source={image} alt={name}/>

      </Circle>
      </Square>
    <Text mt="2px" bgColor={"red.500"} fontSize={10} textAlign="center" w={60} fontFamily={"ReadexProBold"}>{name}</Text>

    </Box>
  )
}

export default WatchAvatar