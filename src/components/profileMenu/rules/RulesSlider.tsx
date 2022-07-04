import React from 'react'
import { Text,Center,Box, FlatList, Button, Heading, Image} from "native-base";
import { ImageSourcePropType } from 'react-native';

interface Props{
  img:ImageSourcePropType;
  text:string;
  type:string;
  index:number;
}
const RulesSlider = ({img,text,type,index}:Props) => {
  return (
 <>
    <Image mx={"auto"} source={img} alt={type}/>
    <Text textAlign={"center"} fontFamily="ReadexProBold" fontSize={"20px"}>{type}</Text>
    <Text color="#393939" textAlign={"center"} mt={"20px"} mx="auto">{text}</Text>
      </>  )
}

export default RulesSlider