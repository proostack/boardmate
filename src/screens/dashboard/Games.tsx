import React from "react";
import { Text, Center, Box, FlatList } from "native-base";
import Badge from "../../components/dashboard/Badge";
import Game from "../../components/dashboard/Game";
import { ImageSourcePropType, SafeAreaView } from "react-native";
import { DashBoardNavProps } from "../../types/routes";
import { Icons } from "../../app";

interface Games {
  image: ImageSourcePropType;
  name: string;
  info: string;
}

const badge: { name: string; color: string }[] = [
  {
    name: "Intermediate",
    color: "accent_bg.50",
  },
  {
    name: "Expert",
    color: "#B58863",
  },
  {
    name: "Beginner",
    color: "#FAC036",
  },
];

const games: Games[] = [
  {
    image: Icons.Die,
    name: "Ludo",
    info: "Game of 4 players....",
  },
  {
    image: Icons.Draught,
    name: "Draught",
    info: "Game of 4 players....",
  },
  {
    image: Icons.Monopoly,
    name: "Monopoly",
    info: "Game of 4 players....",
  },
  {
    image: Icons.Chess,
    name: "Chess",
    info: "Game of 4 players....",
  },
  {
    image: Icons.Scramble,
    name: "Scrabble",
    info: "Game of 4 players....",
  },
];

const Games = ({
  navigation,
}: DashBoardNavProps<"ChoosePlayer">): JSX.Element => {
  return (
    <Center pt="62px">
      <Box maxW={"375px"} w="90%" mt={47}>
        <Box alignItems="flex-end">
          <Badge {...badge[1]} />
        </Box>

        <Text mb="30px" fontFamily="ReadexProBold" w={150} fontSize={20} fontWeight={600}>
          Select a game & play!
        </Text>
        <SafeAreaView>

          <FlatList
            mb={30}
            data={games}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <Game
                callback={() =>
                  navigation.navigate("ChoosePlayer", { name: item.name })
                }
                {...item}
              />
            )}
          />
        </SafeAreaView>

      </Box>
    </Center>
  );
};

export default Games;
