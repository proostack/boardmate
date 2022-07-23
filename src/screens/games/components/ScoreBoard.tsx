import React from 'react'
import { ImageSourcePropType } from "react-native";
import { Box, Circle, HStack, Image, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
interface Props {
  name: string;
  image: ImageSourcePropType
}
const ScoreBoard = ({ name, image }: Props): JSX.Element => {
  return (
    <HStack justifyContent="space-between" px="27px">
      <HStack>
        <Circle bgColor={"#373644"} size="50" mr="14px">
          <Image source={image} size="32px" alt='user'/>
        </Circle>
        <Box>
          <Text color="white" fontFamily="ReadexProRegular">{name} (323)</Text>
          <Box h="30px" w="101px" bgColor="#373644" mt="8px" borderWidth={1} borderRadius="5" borderColor={"#E1D9D90D"}></Box>
        </Box>
      </HStack>
      <Box>
        <AntDesign name="clockcircle" size={24} color="white" />
        <Text color={"white"} mt="8px" fontFamily={"ReadexProBold"}>00.02</Text>
      </Box>
      </HStack>
  )
}

export default ScoreBoard