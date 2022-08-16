import React from 'react'
import { Text, Center, Box, FlatList, Button, HStack, Image, Heading, Square, Circle } from "native-base";
import { Dimensions, ImageBackground } from 'react-native';
import RandomUserPlay from '../../components/dashboard/RandomUserPlay';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { DashBoardNavProps } from '../../types/routes';



const PlayRandom = ({ route }: DashBoardNavProps<"PlayRandom">): JSX.Element => {
  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const users = defaultUsers
  const { width } = Dimensions.get("screen")
  // console.log(route.params?.name)
  return (
    <Center flex={1}>
      <ImageBackground style={{ flex: 1, width }} source={require("../../../assets/images/dashboard/map.png")}>
        <Box maxW={375} mt={71} mx="auto" width="100%">
          <Heading fontFamily={"ReadexProBold"} color="white" w={126}>Play randomly</Heading>
          <Text color={"rgba(255, 255, 255, 1)"} mt={"20px"}>
            Play randomly wih friends or anybody around the world, enjoy the game.
          </Text>

          <Square w={328} h={250} bgColor="white" borderRadius={20} mt={100} mx="auto">
            <HStack w={"100%"} px="27px" position={"relative"} justifyContent={"space-between"}>
              <RandomUserPlay name="You" image={users[0].image} />

              <Circle position="absolute" left={"50%"} top="34px" zIndex={1} bgColor="accent_bg.50" size={60}><Text color="white" fontFamily={"ReadexProBold"}>VS</Text></Circle>

              <RandomUserPlay name={route.params ? route.params?.name : users[1].name} image={route.params ? route.params?.image : users[1].image} />
            </HStack>

          </Square>

        </Box>
      </ImageBackground>


    </Center>
  )
}

export default PlayRandom