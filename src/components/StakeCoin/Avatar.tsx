import { Circle, HStack, Image, Square, Text } from 'native-base'
import React from 'react';
import { ImageSourcePropType } from 'react-native';
interface Props {
  alignSelf: string,
  img: ImageSourcePropType,
  name: string
}

const Avatar = ({ alignSelf, img, name }: Props): JSX.Element => {
  return (
    <HStack alignSelf={alignSelf} alignItems="center">
      <Square my="10px"
        size={"40px"} borderRadius="10px"
        bgColor={"darkTheme.50"}
      >
        <Circle size="70%" bgColor={"white"}>
          <Image size={"80%"} source={img} alt="user" />
        </Circle>
      </Square>
      <Text fontFamily={"MulishRegular"} ml="18px" fontSize="14px">{name}</Text>
    </HStack>
  )
}

export default Avatar