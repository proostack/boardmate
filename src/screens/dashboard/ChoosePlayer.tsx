import React from 'react'
import { Text,Center,Box, FlatList, Button, HStack, Image} from "native-base";
import { ImageSourcePropType, SafeAreaView} from 'react-native';
import ChooseCard from '../../components/dashboard/ChooseCard';
import { DashBoardNavProps } from '../../types/routes';

const choosePlayer:{image:ImageSourcePropType,option:string}[]=[{
  image:require("../../../assets/images/dashboard/choosePlay/handshake.png"),option:"Play with a friend"
},
{
  image:require("../../../assets/images/dashboard/choosePlay/die.png"),option:"Play randomly"
},
{
  image:require("../../../assets/images/dashboard/choosePlay/handshake.png"),option:"Challenge a BoardMate friend with Cash",
},
{
  image:require("../../../assets/images/dashboard/choosePlay/die.png"),option:"Challenge a random Boardmate player with cash.",
}]

const ChoosePlayer = ({navigation}:DashBoardNavProps<"ChooseFriend">) => {
  return (
<Center >
<Box maxW={375} w="100%" mt={47}>


        <Button  onPress={() => navigation.goBack()} variant={"unstyled"}  w={90} >
          <HStack>
            <Box pr={17}>
              <Image source={require("../../../assets/images/leftArrow.png")} alt="arrow-left" />
            </Box>
            <Text  fontFamily={"ReadexProBold"} mb={50}>
              GO BACK
            </Text>
          </HStack>
        </Button>
<Text fontFamily="ReadexProBold" w={150} fontSize={20} fontWeight={600}>Let’s begin!
Choose a player</Text>

<Box>

<SafeAreaView>
<FlatList mt={50} data={choosePlayer} numColumns={2} columnWrapperStyle={{justifyContent:"space-between"}} renderItem={({item,index})=>(
 
  <ChooseCard index={index} callback={()=>index===0 && navigation.navigate("ChooseFriend")} {...item}/>

  )}/>
</SafeAreaView>


 
</Box>

   </Box> 
    </Center>
  )
}

export default ChoosePlayer