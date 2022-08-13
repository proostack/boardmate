import React from "react";
import { Text, Center, Box, FlatList } from "native-base";
import { ImageSourcePropType, SafeAreaView } from "react-native";
import ChooseCard from "../../components/dashboard/ChooseCard";
import { DashBoardNavProps } from "../../types/routes";
import Goback from "../../components/Goback";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Icons } from "../../app";

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
];

const ChoosePlayer = ({
  navigation,
}: DashBoardNavProps<"ChooseFriend">): JSX.Element => {
  const { defaultUsers } = useSelector((state: RootState) => state.user);
  const users = defaultUsers;

  return (
    <Center>
      <Box  maxW="375px" w="90%" mt={47}>
        <Goback callback={() => navigation.goBack()} />

        <Text fontFamily="ReadexProBold" w={150} fontSize={20} fontWeight={600}>
          Let’s begin! Choose a player
        </Text>

        <Box>
          <SafeAreaView>
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
                      : navigation.navigate("WagerAmount", {
                          name: users[1].name,
                          image: users[1].image,
                        })
                  }
                  {...item}
                />
              )}
            />
          </SafeAreaView>
        </Box>
      </Box>
    </Center>
  );
};

export default ChoosePlayer;
