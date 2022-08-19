import React from 'react'
import { Text, Center, Box,  HStack, Circle } from "native-base";
import WatchAvatar from './WatchAvatar';
import Button from './Button';
import { ImageSourcePropType } from 'react-native';

interface Props {
  user1: {
    id: number;
    name: string;
    image: any;
    active: boolean;
    choose: boolean;
  }
  user2: {
    id: number;
    name: string;
    image: any;
    active: boolean;
    choose: boolean;
  },
  navigateStake?:()=>void
}

const WatchCard = ({ user1, user2,navigateStake }: Props):JSX.Element => {
  return (
    <Box mt={20} h={150} bgColor={"white"} borderRadius={8} pl={"15px"} pr={"15px"}>
      <Text color="rgba(57, 57, 57, 1)" fontFamily="ReadexProBold" fontSize={15} mt={"12px"}>Monopoly Game</Text>
      <HStack mt={"15px"} justifyContent="space-between" position={"relative"}>
        <HStack w={"120px"} justifyContent={"space-between"}>

          <WatchAvatar image={user1.image} name={user1.name} />


          <Center position={"absolute"} w={"100%"} zIndex={1}>
            <Circle mt={"15px"} size={9} bgColor="accent_bg.50"><Text color={"white"} fontFamily="ReadexProBold" fontSize={8}>VS</Text></Circle>
          </Center>


          <WatchAvatar image={user2.image} name={user2.name} />

        </HStack>

        <HStack pl={"10px"} alignItems={"flex-start"}>

          <Button onPress={()=>console.log("Watching")} color="accent_bg.50" borderColor="accent_bg.50" borderWidth={1} text="Watch" />
          <Box w={"19px"}></Box>

          <Button onPress={navigateStake} bgColor='accent_bg.50' text="Stake" color="white" />

        </HStack>
      </HStack>
    </Box>)
}

export default WatchCard