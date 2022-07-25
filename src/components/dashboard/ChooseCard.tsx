import React from 'react'
import { Text, Box, Image, Heading } from "native-base";
import PlayBtn from '../Buttons/PlayBtn';
import { ImageSourcePropType } from 'react-native';

interface Props {
  image: ImageSourcePropType;
  option: string;
  index?: number;
  callback?: () => void;
}



const ChooseCard = ({ image, option, index, callback }: Props): JSX.Element => {
  return (
    <Box h={206} bgColor={index == 1 || index == 3 ? "white" : "#393939"} mb={50} borderRadius={8} w={155} px={18}>
      <Image mt="20px" source={image} mb="10px" alt="dice" />
      <Heading fontFamily={"ReadexProBold"} color={index == 1 || index == 3 ? "#393939" : "white"} fontSize={index == 2 || index == 3 ? 12 : index === 1 ? 16 : 14}>{option}</Heading>
      <Text mt="15px" fontSize={10} fontFamily={"ReadexProRegular"} color={index == 1 || index == 3 ? "#393939" : "white"}>
        {option}
      </Text>
      <Box flex={1} justifyContent={"flex-end"} mb={"10px"}>
        <PlayBtn text='Play now' color={index == 1 || index == 3 ? "accent_bg.50" : "white"} callback={callback} textColor={index == 1 || index == 3 ? "white" : "black"} />
      </Box>
    </Box>
  )
}

export default ChooseCard