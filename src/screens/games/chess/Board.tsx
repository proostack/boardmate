import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Background from "../components/Background";
import { useConst } from "../utils/Animatedhelpers";
const { width } = Dimensions.get("window");
import { Chess } from "chess.js";
import Piece from "../components/Piece";
import { SIZE } from "./Notation";
import { KBLACK } from "../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ScoreBoard from "../components/ScoreBoard";
import ChessBottomTab from "../components/ChessBottomTab";
import PromotePawn from "../components/modals/PromotePawn/PromotePawn";
import Theme from "../components/modals/ChooseTheme/Theme";
import Chat from "../components/modals/chat/Chat";
import Win_Lose from "../components/modals/win&lose/Win_Lose";
import Quit from "../components/modals/Quit";
import { DashBoardNavProps } from "../../../types/routes";
<<<<<<< HEAD
import TopNav from "../components/TopNav";
=======
import { Box } from "native-base";
>>>>>>> a30af23 (Win/lose)

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
    marginVertical: 31,
    position: "relative"
  },
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#34364C",
  },
  boardBorder: {
    zIndex: -1,
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#2A2935",
    transform: [{ scale: 1.03 }]
  }
});

const Board = ({ navigation }: DashBoardNavProps<"Chess">): JSX.Element => {
  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const users = defaultUsers

  const chess = useConst(() => new Chess());

  const [state, setState] = useState({
    player: "w",
    board: chess.board(),
  });

  const onTurn = useCallback(
    () =>
      setState({
        player: state.player === "w" ? "b" : "w",
        board: chess.board(),
      }),
    [chess, state.player]
  );
  const [showPawn, setShowPawn] = useState<boolean>(false)
  const [showTheme, setShowTheme] = useState<boolean>(false)
  const [showChat, setShowChat] = useState<boolean>(false)
  const [showQuit, setShowQuit] = useState<boolean>(false)
  const [rematch, setRematch] = useState(0)
  const handleClosePawn = () => {
    setShowPawn(false)
  }
  const handleCloseTheme = () => {
    setShowTheme(false)
  }
  const handleCloseChat = () => {
    setShowChat(false)
  }
  const handleCloseQuit = () => {
    setShowQuit(false)
  }


  chess.header(
    "White", "You",
    "Black", users[0].name,
    "WhiteImg", users[0].image,
    "BlackImg", users[1].image
  )

  return (
    <View style={styles.outerContainer}>
      <TopNav setShowQuit={() => { setShowQuit(true) }} />
      <Chat showChat={showChat} handleClose={handleCloseChat} name={users[0].name} />
      <Theme showTheme={showTheme} handleClose={handleCloseTheme} />
      <PromotePawn showPawn={showPawn} handleClose={handleClosePawn} />
      <Win_Lose rematch={() => setRematch(rematch + 1)} chess={chess} users={users} />
      <Box mt="32px">
        <ScoreBoard name={chess.header().Black} image={users[1].image} />
      </Box>
      <Quit
        goBack={() => { navigation.goBack() }}
        showQuit={showQuit}
        handleCloseQuit={handleCloseQuit}
      />
      <View style={styles.container}>
        <Background />
        <View style={styles.boardBorder} />
        {state.board.map((row, y) =>
          row.map((square, x) => {
            if (square === null) {
              return null;
            }
            return (
              <Piece
                enabled={state.player === square.color}
                onTurn={onTurn}
                chess={chess}
                key={x + Math.random()}
                startPosition={{ x, y }}
                id={`${square.color}${square.type}` as const}
              />
            );
          })
        )}
      </View>
      <ScoreBoard name={chess.header().White} image={users[0].image} />
      <ChessBottomTab
        setShowChat={() => setShowChat(true)}
        setShowPawn={() => setShowPawn(true)}
        setShowTheme={() => setShowTheme(true)}
        setShowQuit={() => setShowQuit(true)}
      />
    </View>
  )
};

export default Board;
