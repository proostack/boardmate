import React from 'react'
import { ImageSourcePropType } from "react-native";
import { Box, Circle, HStack, Image, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { PIECES } from "./Piece"
import { Move } from 'chess.js';
interface Props {
  name: string | undefined;
  image: ImageSourcePropType,
  capturedB?: () => Move[],
  capturedW?: () => Move[],
}
const ScoreBoard = ({ name, image, capturedB, capturedW }: Props): JSX.Element => {

  return (
    <HStack justifyContent="space-between" px="27px">
      <HStack>
        <Circle bgColor={"#373644"} size="50" mr="14px">
          <Image source={image} size="32px" alt='user' />
        </Circle>
        <Box>
          <Text color="white" fontFamily="ReadexProRegular">{name} (323)</Text>
          <HStack flexWrap={"wrap"} px="9px" alignItems={"center"} position={"relative"} py="8px" w="101px" bgColor="#373644" mt="8px" borderWidth={1} borderRadius="5" borderColor={"#E1D9D90D"}>

            {
              (capturedB && capturedB().length > 0) && capturedB().map((item, index) => (
                (item.color && item.captured) && (
                  <Image key={index} h="11px"
                    w="10px"
                    source={PIECES[`w${item.captured}`]}
                    alt="captured piece" 
                    />
                )
              ))
            }

            {
              (capturedW && capturedW().length > 0) && capturedW().map((item, index) => (
                (item.color && item.captured) && (
                  <Image key={index} h="11px"
                    w="10px"
                    source={PIECES[`b${item.captured}`]}
                    alt="captured piece" 
                    />
                )
              ))
            }
            {/* <Image h="11px" w="10px" source={PIECES["bb"]} alt="captured piece"/> */}
          </HStack>
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