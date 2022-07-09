import React, { useCallback, useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Background from "../components/Background";
import { useConst } from "../utils/Animatedhelpers";
const { width } = Dimensions.get("window");
import { Chess } from "chess.js";
import Piece from "../components/Piece";
import { SIZE } from "./Notation";
import { KBLACK } from "../utils/constants";

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#34364C",
  },
});

const Board = (): JSX.Element => {
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

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Background />
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
    </View>
  );
};

export default Board;
