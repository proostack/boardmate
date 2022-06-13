import { Box, Image, Text, Circle } from 'native-base'
import React from 'react'
import { ImageSourcePropType } from 'react-native';

interface Props {
  sex: string;
  image: ImageSourcePropType;
  choose: boolean;
}
const SexAvatar = (props: Props): JSX.Element => {
  return (
    <Box>
      <Circle h={120} w={120} bgColor={props.choose ? "accent_bg.50" : "#F9F9FA"}>
        <Image source={props.image} alt="avatar" />
      </Circle>
      <Text mt={26} fontFamily="ReadexProRegular" color="#393939" textAlign={"center"} fontSize={16} textTransform={"capitalize"}>{props.sex}
      </Text>
    </Box>
  )
}

export default SexAvatar