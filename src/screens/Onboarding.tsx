import { Box, Text,HStack} from "native-base";
import React from "react";
import { Animated, TouchableOpacity, useWindowDimensions } from "react-native";
import OnBoarding from "../components/OnBoarding";

import { AuthNavigationProps } from "../types/routes";

const Onboarding=({ navigation }: AuthNavigationProps<"Onboarding">):JSX.Element =>{
    const onBoardProps = [
        {
            bgColor: "#F16FA6",
            circleOneColor: "rgba(244, 140, 184, 1)",
            circleTwoColor: "rgba(246, 168, 201, 1)",
            animateColorOne: "rgba(244, 140, 184, .4)",
            animateColorTwo: "rgba(246, 168, 201, .2)",
            image: require("../../assets/images/chess.png"),
            header: "Earn",
            text: "Earn by winning BoardMate Challenges"
        },
        {
            bgColor: "#9A93F4",
            circleOneColor: "rgba(173, 154, 245, 1)",
            circleTwoColor: "rgba(188, 171, 254, 1)",
            animateColorOne: "rgba(173, 154, 245, .4)",
            animateColorTwo: "rgba(188, 171, 254, .2)",
            image: require("../../assets/images/coin.png"),
            header: "Earn",
            text: "Stake BM Coins on public games"
        },
        {
            bgColor: "#29C4B1",
            circleOneColor: "rgba(94, 214, 196, 1)",
            circleTwoColor: "rgba(123, 220, 205, 1)",
            animateColorOne: "rgba(94, 214, 196, .4)",
            animateColorTwo: "rgba(123, 220, 205, .2)",
            image: require("../../assets/images/money.png"),
            header: "Earn",
            text: "Convert your BoardMate coins to real cash"
        }
    ]

    const { width } = useWindowDimensions()

    return (

        <Box flex={1}>
            <Animated.FlatList decelerationRate={'fast'} showsHorizontalScrollIndicator={false} data={onBoardProps} pagingEnabled bounces={false} horizontal renderItem={({ item,index }) => <Box w={width}>
                <OnBoarding {...item} index={index} data={onBoardProps} navigation={navigation.navigate} />
            </Box>} />
            <HStack space={2} mt={119} position="absolute" bottom={105} w="100%" justifyContent="center">
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Box borderRadius={12} alignItems="center" justifyContent="center" borderWidth={2} borderColor="white" h={62} w={151}>
                        <Text fontSize={16} fontFamily="ReadexProBold" color="white">Login</Text>
                    </Box>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Box borderRadius={12} bgColor="white" alignItems="center" justifyContent="center" h={62} w={151}>
                        <Text fontSize={16} fontFamily="ReadexProBold" color="black">Sign Up</Text>
                    </Box>
                </TouchableOpacity>
            </HStack></Box>


    )
}
export default Onboarding
