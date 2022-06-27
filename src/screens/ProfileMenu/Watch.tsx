import React from 'react'
import { Text, Center, Box, FlatList,  Heading, Square, HStack, Circle, Image, ScrollView } from "native-base";
import { Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import WatchCard from '../../components/Watch/WatchCard';

const Watch = (): JSX.Element => {



  const { width } = Dimensions.get("screen")
const {defaultUsers}=useSelector((state:RootState)=>state.user)
  return (
    <ImageBackground style={{ flex: 1, width, position: 'absolute', height: "100%", top: 0 }} source={require("../../../assets/images/dashboard/map.png")}>
      <Box width={width} px={"23px"} mt="71px">
      <Heading fontSize={"20px"} textAlign={"center"} color={"white"} fontFamily="ReadexProBold">Stake a BMC (Boardmate Coin) </Heading>
<Text fontSize={"12px"} mt={"20px"} color="white" textAlign={"center"} fontFamily="ReadexProLight">Stake a BMC on your favorite player to earn more coins.</Text>

<Center>
  <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
  {Array(10).fill(null).map((_,index)=>(
    <WatchCard key={index} user1={defaultUsers[0]} user2={defaultUsers[1]}/>

  ))}
  </ScrollView>
  </SafeAreaView>

</Center>


      </Box>



    </ImageBackground>
  )
}

export default Watch