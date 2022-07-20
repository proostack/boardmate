import React from 'react'
import { Text,Box, FlatList, Button, Square,Image, HStack, Heading} from "native-base";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { SafeAreaView } from 'react-native';
import UserInfo from '../../components/profileMenu/UserInfo';
const Dashboard = ():JSX.Element => {
  const {defaultUsers}=useSelector((state:RootState)=>state.user)


  const profileDetails:string[]=["Joined Apr 15, 2022","BM Coin available; 7000","Rating; 35"]
const borderRadius=8

const gameInfo=[
  {text:"Number of games won;",digit:25},
  {text:"Number of games lost;",digit:20},
  {text:"Total Number of BM Coin placed;",digit:25},
  {text:"Total Amount of BM Coin placed;",digit:50000},
  {text:"Total Amount of BM Coin won;",digit:30000},
  {text:"Total Amount of BM Coin lost;",digit:20000},
  {text:"Winning Ratio;",digit:"60%"},
  {text:"Losing Ratio;",digit:"40%"},

]

  return (
    <Box flex={1} bgColor={"darkTheme.50"}>
      
     <HStack mt={"32px"} px={"30px"}>
     <UserInfo profileDetails={profileDetails} image={defaultUsers[0].image} name={defaultUsers[0].name}/>
     </HStack>

<Square borderRadius={borderRadius} mt={"40px"} bgColor="#34364C" h={86}>
<Text fontFamily={"ReadexProBold"} fontSize={16} textAlign={"center"} mb={"20px"} color={"white"}>Total number of games played;</Text>
<Text fontFamily={"ReadexProBold"} fontSize={16} textAlign={"center"} color={"white"}>45</Text>
</Square>

<SafeAreaView>
<FlatList px={"30px"} data={gameInfo} numColumns={2} columnWrapperStyle={{justifyContent:"space-between"}} renderItem={({item})=>(
   <Square px="9px" w={156} borderRadius={borderRadius} mt={"40px"} bgColor="#34364C" h={86}>
   <Text fontFamily={"ReadexProBold"} fontSize={12} textAlign={"center"} mb={"20px"} color={"white"}>
{item.text}
   </Text>
   <Text fontFamily={"ReadexProBold"} fontSize={12} textAlign={"center"} color={"white"}>{item.digit}</Text>
   </Square>

)}/>
</SafeAreaView>


</Box>
    )
}

export default Dashboard