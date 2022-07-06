import React from 'react'
import { Text,Center,Box,Circle, Image, Heading, Square} from "native-base";
import { ImageSourcePropType } from 'react-native';
interface Props{
  name:any;
  image:ImageSourcePropType;
}
const RandomUserPlay = ({image,name}:Props):JSX.Element => {
  return (
<Center>
 <Square w={131} h={130} bgColor={"rgba(25, 26, 26, 1)"} borderRadius={10}>
  <Circle bgColor="white" size={60}>
  <Image size={36} source={image} alt={name}/>
  </Circle>

</Square> 
<Text mt={"12px"} color="rgba(57, 57, 57, 1)" fontFamily={"ReadexProRegular"}>{name}</Text>
</Center>
     )
}

export default RandomUserPlay