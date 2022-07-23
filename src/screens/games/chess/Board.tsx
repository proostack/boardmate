import React, { useCallback, useState } from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
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
import Modal from "../../../components/Modal";
import { Box, FlatList, Square, Text } from "native-base";
import PromotePawn from "../components/modals/PromotePawn/PromotePawn";
import Theme from "../components/modals/ChooseTheme/Theme";
import Chat from "../components/modals/chat/Chat";

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

const Board = (): JSX.Element => {
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
const [showPawn,setShowPawn]=useState<boolean>(false)
const [showTheme,setShowTheme]=useState<boolean>(false)
const [showChat,setShowChat]=useState<boolean>(false)
  return (
    <View style={styles.outerContainer}>
      <PromotePawn/>
      {/* <Theme/> */}
      {/* <Chat name={users[0].name}/> */}
      <ScoreBoard name={users[0].name} image={users[0].image} />
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
      <ScoreBoard name={users[0].name} image={users[0].image} />
      <ChessBottomTab showChat={showChat} showPawn={showPawn} showTheme setShowChat={()=>setShowChat(!showChat)} setShowPawn={()=>setShowPawn(!showPawn)} setShowTheme={()=>setShowTheme(!showTheme)}/>
    </View>
  );
};

export default Board;
