import React from 'react'
import { Text, Center, Box, HStack } from "native-base";
import InputField from '../../components/InputField';
import FriendAvatar from '../../components/avatars/FriendAvatar';
import { DashBoardNavProps } from '../../types/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Goback from '../../components/Goback';
import { ImageSourcePropType } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPlayer } from '../../store/user';


const ChooseFriend = ({ navigation }: DashBoardNavProps<"ChooseFriend" | "Chess">): JSX.Element => {
  const dispatch = useDispatch()
  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const users = defaultUsers

  const [search, setSearch] = React.useState("");
  const [players, setPlayers] = React.useState(users);

  const handleChoose = (id: number, name: string, image: ImageSourcePropType) => {
    setPlayers(players.map(player =>
    (player.id === id ? {
      ...player,
      choose: true
    }
      : {
        ...player,
        choose: false
      }
    )))
    dispatch(setPlayer({ name, image }))
    // console.log(id,name,players[0].image)
    navigation.navigate("Chess")
  }

  return (
    <Center>
      <Box maxW={375}
        w="90%"
        mt={62}>

        <Goback
          callback={() => navigation.goBack()}
        />

        <Text fontFamily="ReadexProBold"
          w={150}
          fontSize={20}
          fontWeight={600}
        >
          Let’s begin!
          Choose a player
        </Text>

        <InputField label='Search for a friend'
          input={search}
          getInput={setSearch}
        />

        <Text fontFamily={"ReadexProRegular"}
          fontSize={12}
          mt={30}
        >
          Suggestions
        </Text>

        <HStack justifyContent={"space-between"} mt={30}>
          {players.map((item, index) => {

            return (
              <FriendAvatar key={index}
                {...item}
                callback={handleChoose}
              />
            )
          })}
        </HStack>

      </Box>
    </Center>
  )
}

export default ChooseFriend

