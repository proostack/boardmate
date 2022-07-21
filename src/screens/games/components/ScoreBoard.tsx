import React from 'react'
import { ImageSourcePropType } from "react-native";
import { Box, Circle, Image, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
interface Props {
  name: string;
  image: ImageSourcePropType
}
const ScoreBoard = ({ name, image }: Props): JSX.Element => {
  return (
    <Box flexDir={"row"} justifyContent="space-between" px="27px">
      <Box style={{ flexDirection: "row"}}>
        <Circle bgColor={"#373644"} size="50" mr="14px">
          {/* <Image style={{width:32,height:32,}}/> */}
          <Image source={image} size="32px" alt='user'/>
        </Circle>
        <Box>
          <Text color="white" fontFamily="ReadexProRegular">{name} (323)</Text>
          <Box h="30px" w="101px" bgColor="#373644" mt="8px" borderWidth={1} borderRadius="5" borderColor={"#E1D9D90D"}></Box>
        </Box>
      </Box>
      <Box>
        <AntDesign name="clockcircle" size={24} color="white" />
        <Text color={"white"} mt="8px" fontFamily={"ReadexProBold"}>00.02</Text>
      </Box>
    </Box>
  )
}

export default ScoreBoard