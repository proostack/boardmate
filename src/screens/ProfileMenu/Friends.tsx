import React, { useState } from 'react'
import { Text, Center, Box, HStack  } from "native-base";
import InputField from '../../components/InputField';
import FriendAvatar from '../../components/avatars/FriendAvatar';
import { ProfileNavProps } from '../../types/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Goback from '../../components/Goback';
import { Dimensions, ImageSourcePropType } from 'react-native';
import SearchField from '../../components/SearchField';


const Friends = ({ navigation }: ProfileNavProps<"Dashboard">): JSX.Element => {

  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const users = defaultUsers

  const [search, setSearch] = React.useState("");
  const [players, setPlayers] = React.useState(users.map((user, index) => ({ ...user, index })));

  const handleChoose = (id:number,name:string,image:ImageSourcePropType) => {
    setPlayers(players.map(player => (player.id === id ? { ...player,choose: true } : { ...player, choose: false })))

  }
const {width}=Dimensions.get("screen")
const [input, getInput]=useState<string>("")
  return (
    <Box flex={1} px={23} width={width} bgColor="darkTheme.50">
      <Box  w="100%" mt={54}>
  

        <Text fontFamily="ReadexProBold" w={150} color="white" fontSize={20} fontWeight={600}>
          Select a friend to play with
        </Text>

<Box mt={"50px"}>
<SearchField bgColor='rgba(246, 246, 246, 0.3)' input={input} getInput={getInput}/>
</Box>


        <Text fontFamily={"ReadexProRegular"} color="white" fontSize={12} mt={30}>Suggestions</Text>


        <HStack justifyContent={"space-between"} mt={30}>
          {players.map((item, index) => {

            return (
              <FriendAvatar key={index} {...item} callback={handleChoose} color={"white"}/>
           )
          })}
        </HStack>

      </Box>
    </Box>
  )
}

export default Friends

