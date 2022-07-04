import React from 'react'
import { Text,Center,Box, FlatList, ScrollView} from "native-base";
import Badge from '../../components/dashboard/Badge'
import Game from '../../components/dashboard/Game';
import { ImageSourcePropType, SafeAreaView} from 'react-native';
import { DashBoardNavProps } from '../../types/routes';

interface Games{
  image:ImageSourcePropType,name:string,info:string
}

const badge:{name:string,color:string}[]=[
  {
  name:"Intermediate",
  color:"accent_bg.50"
},
{
  name:"Expert",
  color:"#B58863"
},
{
  name:"Beginner",
  color:"#FAC036"
},
]

const games:Games[]=[{
  image:require("../../../assets/images/dashboard/games/dice.png"),name:"Ludo",info:"Game of 4 players...."
},
{
  image:require("../../../assets/images/dashboard/games/draught.png"),name:"Draught",info:"Game of 4 players...."
},
{
  image:require("../../../assets/images/dashboard/games/monopoly.png"),name:"Monopoly",info:"Game of 4 players...."
},
{
  image:require("../../../assets/images/dashboard/games/chess.png"),name:"Chess",info:"Game of 4 players...."
},
{
  image:require("../../../assets/images/dashboard/games/scrabble.png"),name:"Scrabble",info:"Game of 4 players...."
}
]

const Games = ({navigation}:DashBoardNavProps<"ChoosePlayer">):JSX.Element => {
  return (
    <Center >
<Box px={"30px"} w="100%" mt={47}>

  <Box alignItems="flex-end">
  <Badge {...badge[1]}/>
  </Box>

<Text fontFamily="ReadexProBold" w={150} fontSize={20} fontWeight={600}>Select a game & play!</Text>

<Box>


  
<FlatList mt={30} data={games} numColumns={2} columnWrapperStyle={{justifyContent:"space-between"}} renderItem={({item})=>(
 
  <Game callback={()=>navigation.navigate("ChoosePlayer")} {...item}/>

  )}/> 
</Box>
   </Box> 
    </Center>
    
  )
}

export default Games