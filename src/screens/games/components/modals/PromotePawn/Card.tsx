import React from 'react'
import { Square, Text, Image } from "native-base";
import { ImageSourcePropType } from 'react-native';
interface Props{
  pawn:string;
  image:ImageSourcePropType
}
const Card = ({pawn,image}:Props):JSX.Element => {
  return (
    <Square mt="23px">
    <Square py="14px" px="40px" bgColor="darkTheme.50">
    <Image source={image} alt="piece"/>
    <Text mt="12px" fontFamily={"ReadexProRegular"} color="white">{pawn}</Text>
    </Square>
  </Square> 
   )
}

export default Card