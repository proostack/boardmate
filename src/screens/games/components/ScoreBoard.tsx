import React, { useRef, useState } from 'react'
import { ImageSourcePropType } from "react-native";
import { Box, Circle, HStack, Image, Text } from 'native-base';
import { PIECES } from "./Piece"
import { Move } from 'chess.js';
import Timer from "./Timer"
interface Props {
  name: string | undefined;
  image: ImageSourcePropType,
  capturedB?: () => Move[],
  capturedW?: () => Move[],
  bgColor?: string;
  timer: number
  blackTurn?: boolean
  whiteTurn?: boolean
}
const ScoreBoard = ({ name, image, capturedB, capturedW, bgColor, timer, blackTurn, whiteTurn }: Props): JSX.Element => {



  return (
    <HStack justifyContent="space-between" px="27px">
      <HStack>
        <Circle bgColor={"#373644"} size="50" mr="14px">
          <Image source={image} size="32px"  alt='user' />
        </Circle>
        <Box>
          <Text color="white" fontFamily="ReadexProRegular">{name} (323)</Text>
          <HStack px="6px" alignItems={"center"} position={"relative"} h="30px" w="145px" bgColor={bgColor ? bgColor : "#373644"} mt="8px" borderWidth={1} borderRadius="5" borderColor={"#E1D9D90D"}>

            {
              (capturedB && capturedB().length > 0) && capturedB().map((item, index) => (
                (item.color && item.captured) && (
                  <Image key={index} h="11px"
                    w="14px"
                    ml="-5px"
                    source={PIECES[`w${item.captured}`]}
                    alt="captured piece"
                  />
                )
              ))
            }

            {
              (capturedW && capturedW().length > 0) && capturedW().map((item, index) => (
                (item.color && item.captured) && (
                  <Image key={index} h="14px"
                    w="14px"
                    ml="-5px"

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
      <Timer timer={timer}
        blackTurn={blackTurn}
        whiteTurn={whiteTurn}
      />
    </HStack>
  )
}

export default ScoreBoard