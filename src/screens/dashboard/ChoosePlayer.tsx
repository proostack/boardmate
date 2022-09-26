import React from "react";
import { Text,Box, FlatList } from "native-base";
import { ImageSourcePropType } from "react-native";
import ChooseCard from "../../components/dashboard/ChooseCard";
import { DashBoardNavProps } from "../../types/routes";
import Goback from "../../components/Goback";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Icons } from "../../app";
import { setPlayer } from "../../store/user";
import { useDispatch } from "react-redux";

const choosePlayer: { image: ImageSourcePropType; option: string }[] = [
  {
    image: Icons.Handshake,
    option: "Play with a friend",
  },
  {
    image: Icons.Die,
    option: "Play randomly",
  },
  {
    image: Icons.Handshake,
    option: "Challenge a BoardMate friend with Cash",
  },
  {
    image: Icons.Die,
    option: "Challenge a random BoardMate player with cash.",
  },
  {
    image: Icons.Die,
    option: "Play with AI",
  },
];

const ChoosePlayer = ({
  navigation,
}: DashBoardNavProps<"ChooseFriend">): JSX.Element => {
  const { defaultUsers } = useSelector((state: RootState) => state.user);
  const users = defaultUsers;
  const dispatch = useDispatch()
  const navigateToGame = () => {
    dispatch(setPlayer({ name: 'AI', image: Icons.player1 }))
    navigation.navigate('Chess')
  }


  return (
    <Box flex={1} mx="auto" w="90%" mt={47}>
      <Goback callback={() => navigation.goBack()} />

      <Text fontFamily="ReadexProBold"
       w={150} fontSize={20} 
       fontWeight={600}
       >
        Let’s begin! Choose a player
      </Text>

      <Box flex={1} mb={76}>
        <FlatList
          mt={50}
          data={choosePlayer}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item, index }) => (
            <ChooseCard
              index={index}
              callback={() =>
                index === 0
                  ? navigation.navigate("ChooseFriend")
                  : index === 1
                    ? navigation.navigate("PlayRandom")
                    : index === 2
                      ? navigation.navigate("ChooseFriend")
                      : index === 3
                        ? navigation.navigate("WagerAmount", {
                          name: users[1].name,
                          image: users[1].image,
                        })
                        : navigateToGame()
              }
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default ChoosePlayer;
