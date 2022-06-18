import { Box, Image, Text, Circle } from 'native-base'
import React from 'react'
import { ImageSourcePropType, TouchableOpacity } from 'react-native';

interface Props {
  active:boolean;
  image: ImageSourcePropType;
  choose: boolean;
  name:string;
  callback?:(id:number)=>void;
  id:number;
}

const FriendAvatar = ({image,choose,active,name,id,callback}: Props): JSX.Element => {




  return (
    <TouchableOpacity onPress={()=>callback&&callback(id)}>
    <Box>
      <Circle h={70} w={70} bgColor={choose ? "accent_bg.50" : "#F9F9FA"}>
        <Image source={image} alt="avatar" w={42} h={42}/>

        <Circle position={"absolute"} bottom={0} right={2} h={14} w={14} bgColor={active?'rgba(16, 185, 129, 1)':"rgba(229, 229, 229, 1)"}></Circle>
      </Circle>
      <Text textAlign={"center"} mt="12px" fontFamily={"ReadexProRegular"} color={"rgba(57, 57, 57, 1)"}>{name}</Text>
    </Box>
    </TouchableOpacity>
  )
}

export default FriendAvatar