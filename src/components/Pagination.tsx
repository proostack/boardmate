import { Circle, HStack } from 'native-base'
import React from 'react'
import { ImageSourcePropType } from 'react-native';

interface Props {
  data: {
    bgColor: string;
    circleOneColor: string;
    circleTwoColor: string;
    image: ImageSourcePropType;
    header: string;
    text: string;
  }[];
  currentIndex: number
}
const Pagination = ({ data, currentIndex }: Props): JSX.Element => {
  return (
    <HStack space={3} flexDir={"row"}>
      {data.map((
        item: {
          bgColor: string;
          circleOneColor: string;
          circleTwoColor: string;
          image: ImageSourcePropType;
          header: string;
          text: string;
        },
        index: number) => (
        <Circle key={index} bg={'green.100'} opacity={currentIndex === index ? 1 : .5} size={3}></Circle>
      ))
      }
    </HStack>
  )
}

export default Pagination