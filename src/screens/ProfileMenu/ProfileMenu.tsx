import React from 'react'
import { Text, Center, Box, HStack, Image } from "native-base";
import { Dimensions, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { ProfileNavProps, ProfileRoutes } from '../../types/routes';
import { useDispatch } from 'react-redux';

import { setToken } from '../../store/user';
const { width } = Dimensions.get("screen")

interface NavigateTypes {
  image: ImageSourcePropType;
   navigate: keyof ProfileRoutes;
   text: string
}


const profileArr: NavigateTypes[] = [{ image: require("../../../assets/images/profileMenu/dashboard.png"), text: "Dashboard", navigate: "Dashboard" },
{ image: require("../../../assets/images/profileMenu/profile.png"), text: "Profile", navigate: "User" },
{ image: require("../../../assets/images/profileMenu/friends.png"), text: "Friends", navigate: "Friends" },
{ image: require("../../../assets/images/profileMenu/watch.png"), text: "Watch", navigate: "Watch" },
{ image: require("../../../assets/images/profileMenu/rules.png"), text: "Rules", navigate: "Rules" },
{ image: require("../../../assets/images/profileMenu/help.png"), text: "Help", navigate: "Help" },
{ image: require("../../../assets/images/profileMenu/learn.png"), text: "Learn", navigate: "Learn" },
{ image: require("../../../assets/images/profileMenu/logout.png"), text: "Log out", navigate: "Dashboard" },
]

const ProfileMenu = ({ navigation }: ProfileNavProps<"Dashboard">): JSX.Element => {
  const dispatch = useDispatch();


  const logout_navigate = (item:any) => {
    if (item.text !== "Log out") {
      navigation.navigate(item.text)
    }
    else {
      dispatch(setToken(null))
    }
  }

  return (
    <Box flex={1} bgColor={"#32313F"}>
      <Center>
        <Box width={width} h={20} mt={50} px={31}>
          {profileArr.map((item: NavigateTypes, index: number) => (
            <TouchableOpacity key={index} onPress={() => logout_navigate(item)}>
              <HStack key={index} alignItems={"center"} mb={50}>
                <Image source={item.image} alt={item.text} />
                <Text ml={33}
                  color={item.text === "Log out" ? "red.500" : "white"}
                  fontSize={20}
                  fontFamily={"ReadexProRegular"}
                >
                  {item.text}
                </Text>
              </HStack>
            </TouchableOpacity>
          )
          )}
        </Box>
      </Center>
    </Box>

  )
}

export default ProfileMenu