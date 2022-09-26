import React, { useCallback, useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Background from "../components/Background";
import { useConst } from "../utils/Animatedhelpers";
const { width } = Dimensions.get("window");
import { Chess } from "chess.js";
import Piece from "../components/Piece";
import { SIZE } from "./Notation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ScoreBoard from "../components/ScoreBoard";
import ChessBottomTab from "../components/ChessBottomTab";
import PromotePawn from "../components/modals/PromotePawn/PromotePawn";
import Settings from "../components/modals/settings/Settings";
import Chat from "../components/modals/chat/Chat";
import WinLose from "../components/modals/win&lose/WinLose";
import Quit from "../components/modals/Quit";
import { DashBoardNavProps } from "../../../types/routes";
import TopNav from "../components/TopNav";
import { Box } from "native-base";
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
  const { defaultUsers,player } = useSelector((state: RootState) => state.user)
  const users = defaultUsers
 const opponent=player
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

  const handleOpenChat = useCallback(
    () => setShowChat(true),
    [showChat]
  )

  const handleOpenPawn = useCallback(
    () => setShowPawn(true)
    , [showPawn]
  )

  const handleOpenTheme = useCallback(
    () => setShowTheme(true)
    , [showTheme]
  )

  const handleOpenQuit = useCallback(
    () => setShowQuit(true)
    , [showTheme]
  )

  const handleClosePawn = useCallback(
    () => setShowPawn(false)
    , [showQuit]
  )

  const handleCloseTheme = useCallback(
    () => setShowTheme(false)
    , [showTheme]
  )

  const handleCloseChat = useCallback(
    () => setShowChat(false)
    , [showChat]
  )

  const handleCloseQuit = useCallback(
    () => setShowQuit(false)
    , [showQuit]
  )

  chess.header(
    "White", "You",
    "Black", opponent?.name,
    "WhiteImg", users[0].image,
    "BlackImg", opponent.image
  )

  const history = chess.history({ verbose: true })

  const capturedW = () => history.filter(item => (
    item.captured && item.color === "w")
  )
  const capturedB = () => history.filter(item => (
    item.captured && item.color === "b")
  )

  const timer = 10


const blackTurn=chess.turn()==="b"?true:false
const whiteTurn=chess.turn()==="w"?true:false
  return (
    <View style={styles.outerContainer}>
      <TopNav
        setShowQuit={
          () => { setShowQuit(true) }}
      />

      <Chat
        showChat={showChat}
        handleClose={handleCloseChat}
        name={users[0].name}
      />

      <Settings
        showTheme={showTheme}
        handleClose={handleCloseTheme}
      />

      <PromotePawn
        showPawn={showPawn}
        handleClose={handleClosePawn}
      />

      <WinLose
        chess={chess}
        users={users}
      />

      <Box mt="32px">
        <ScoreBoard
          name={chess.header().Black}
          image={opponent.image}
          capturedB={capturedB}
          timer={timer}
          blackTurn={blackTurn}
        />
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

      <ScoreBoard
        name={chess.header().White}
        image={users[0].image}
        capturedW={capturedW}
        bgColor="white"
        timer={timer}
        whiteTurn={whiteTurn}
      />

      <ChessBottomTab
        setShowChat={handleOpenChat}
        setShowPawn={handleOpenPawn}
        setShowTheme={handleOpenTheme}
        setShowQuit={handleOpenQuit}
      />
    </View>
  )
};

export default Board;
