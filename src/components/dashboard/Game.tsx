import React from 'react'
import { Text,Center,Box, Image, Heading } from "native-base";
import PlayBtn from '../Buttons/PlayBtn';
import { ImageSourcePropType } from 'react-native';

interface Props{
  image:ImageSourcePropType;
  name:string;
  info:string;
  callback:()=>void;
}

const Game = ({image,name,info,callback}:Props) => {
  return (
    <Box h={206} bgColor="#393939"mb={50} borderRadius={8} w={155} px={18}>
      <Image mt="24px" source={image} mb="20px" alt="dice"/>
      
      <Heading fontFamily={"ReadexProBold"} color="white" fontSize={16}>{name}</Heading>
      <Text mb="40px" mt="10px" fontSize={10} fontFamily={"ReadexProRegular"} color={"white"}>{info}</Text>
    
     
      <PlayBtn text='Play now' color='white' callback={callback}/>
    </Box>
  )
}

export default Game