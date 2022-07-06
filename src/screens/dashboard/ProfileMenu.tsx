import React from 'react'
import { Text, Center, Box, FlatList, Button, HStack, Image, Heading, Square, Circle } from "native-base";
import { DashBoardNavProps, } from '../../types/routes';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get("screen")

const profileArr=[{image:require("../../../assets/images/profileMenu/dashboard.png"),text:"Dashboard"},
{image:require("../../../assets/images/profileMenu/profile.png"),text:"Profile"},{image:require("../../../assets/images/profileMenu/friends.png"),text:"Friends"},
{image:require("../../../assets/images/profileMenu/watch.png"),text:"Watch"},
{image:require("../../../assets/images/profileMenu/rules.png"),text:"Rules"},
{image:require("../../../assets/images/profileMenu/help.png"),text:"Help"},
{image:require("../../../assets/images/profileMenu/learn.png"),text:"Learn How to play"},
{image:require("../../../assets/images/profileMenu/logout.png"),text:"Log out"},


]

const ProfileMenu = (): JSX.Element => {
  return (
    <Box flex={1} bgColor={"#32313F"}>
    <Center>
      <Box width={width} h={20} mt={50} px={31}>
        {profileArr.map((item,index)=>(
                <HStack key={index} alignItems={"center"} mb={50}>
                <Image source={item.image} alt={item.text} />
                <Text ml={33} color={item.text==="Log out"?"red.500":"white"} fontSize={20} fontFamily={"ReadexProRegular"}>{item.text}</Text>
              </HStack>)
        )}
  
      </Box>
    </Center>
    </Box>

  )
}

export default ProfileMenu