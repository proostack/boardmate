import React from 'react'
import { Text, Center, Box, FlatList, HStack, Image, Button } from "native-base";
import InputField from '../../components/InputField';
import FriendAvatar from '../../components/avatars/FriendAvatar';
import { DashBoardNavProps } from '../../types/routes';
import { ImageSourcePropType } from 'react-native';

const users=[
  {name:"@knightsaul",image:require("../../../assets/images/avatars/players/player1.png"),active:false,choose:false, id:1},
{name:"@sarai",image:require("../../../assets/images/avatars/players/player2.png"),active:false,choose:false, id:2,},
{name:"@jumuke",image:require("../../../assets/images/avatars/players/player3.png"),active:true,choose:false, id:3},
{name:"@dave",image:require("../../../assets/images/avatars/players/player4.png"),active:false,choose:false, id:4}
]

const ChooseFriend = ({ navigation }: DashBoardNavProps<"ChooseFriend">): JSX.Element => {

  const [search, setSearch] = React.useState("");
  const [players,setPlayers] = React.useState(users);

   
const handleChoose=(id:number)=>{
setPlayers(players.map(player=>(player.id===id?{...player,choose:true}:{...player,choose:false})))
}

  return (
    <Center>



      <Box maxW={375} w="100%" mt={62}>
        <Button  onPress={() => navigation.goBack()} variant={"unstyled"}  w={90} >
          <HStack>
            <Box pr={17}>
              <Image source={require("../../../assets/images/leftArrow.png")} alt="arrow-left" />
            </Box>
            <Text color={"#393939"} fontFamily={"ReadexProBold"} mb={50}>
              GO BACK
            </Text>
          </HStack>
        </Button>



        <Text fontFamily="ReadexProBold" w={150} fontSize={20} fontWeight={600}>Let’s begin!
          Choose a player
        </Text>

        <InputField label='Search for a friend' input={search} getInput={setSearch} />

        <Text fontFamily={"ReadexProRegular"} fontSize={12} mt={30}>Suggestions</Text>

        <HStack justifyContent={"space-between"} mt={30}>
          {players.map((item, index) => {
     
            return (
            <FriendAvatar  key={index} {...item} callback={handleChoose} />

          )})}
        </HStack>

      </Box>
    </Center>
  )
}

export default ChooseFriend