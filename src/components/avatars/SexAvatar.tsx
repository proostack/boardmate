import { Box, Image, Text, Circle } from 'native-base'
import React from 'react'
import { ImageSourcePropType } from 'react-native';

interface Props {
  sex: string;
  image: ImageSourcePropType;
  choose: boolean;
}
const SexAvatar = ({sex,image,choose}: Props): JSX.Element => {
  return (
    <Box>
      <Circle size={120} bgColor={choose ? "accent_bg.50" : "#F9F9FA"}>
        <Image source={image} alt="avatar" />
      </Circle>
      <Text mt={26} fontFamily="ReadexProRegular" color="#393939" textAlign={"center"} fontSize={16} textTransform={"capitalize"}>{sex}
      </Text>
    </Box>
  )
}

export default SexAvatar