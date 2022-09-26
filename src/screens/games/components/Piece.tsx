import React, { useCallback } from "react";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image, StyleSheet } from "react-native";
import { Vector } from "react-native-redash";
import { ChessInstance,  Square } from "chess.js";
import { SIZE, toPosition, toTranslation } from "../chess/Notation";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const styles = StyleSheet.create({
  piece: {
    width: 35,
    height: 35
  },
});
type Player = "b" | "w";
type Type = "q" | "r" | "n" | "b" | "k" | "p";
type Piece = `${Player}${Type}`;
type Pieces = Record<Piece, ReturnType<typeof require>>;
export const PIECES: Pieces = {
  bb: require("../assets/br.png"),
  bp: require("../assets/bp.png"),
  bn: require("../assets/bn.png"),
  br: require("../assets/bb.png"),
  bq: require("../assets/bq.png"),
  bk: require("../assets/bk.png"),
  wb: require("../assets/wr.png"),
  wn: require("../assets/wn.png"),
  wr: require("../assets/wb.png"),
  wq: require("../assets/wq.png"),
  wk: require("../assets/wk.png"),
  wp: require("../assets/wp.png"),
};

interface PieceProps {
  id: Piece;
  startPosition: Vector;
  chess: ChessInstance;
  onTurn: () => void;
  enabled: boolean;
}

const Piece = ({
  id,
  startPosition,
  chess,
  onTurn,
  enabled,
}: PieceProps): JSX.Element => {
const {player}=useSelector((state:RootState)=>state.user)
const opponent=player

  const offsetX = useSharedValue(0);
  const isGestureActive = useSharedValue(false);
  const offsetY = useSharedValue(0);
  const translateX = useSharedValue(startPosition.x * SIZE);
  const translateY = useSharedValue(startPosition.y * SIZE);
  const AIMoves = () => {
    const possibleMoves = chess.moves()
    if (possibleMoves.length === 0 || opponent.name!=='AI') return
    const randomMove = Math.floor(Math.random() * possibleMoves.length)
    chess.move(possibleMoves[randomMove] as Square)
    onTurn()
  }
  const movePiece = useCallback(
    (from: any, to: any) => {
      const move = chess
        .moves({ verbose: true })
        .find((m) => m.from === from && m.to === to);
      const { x, y } = toTranslation(move ? to : from);
      translateX.value = withTiming(
        x,
        {},
        () => (offsetX.value = translateX.value)
      );
      translateY.value = withTiming(y, {}, () => {
        offsetY.value = translateY.value;
        isGestureActive.value = false;
      });
      if (move) {
        chess.move(move);
        onTurn()
        setTimeout(AIMoves, 2000)
      }
    },
    [chess, offsetX, offsetY, onTurn, isGestureActive, translateX, translateY]
  );

  const movingPiece = (translationX: number, translationY: number) => {
    if (chess.game_over()) return
    if(id.includes('b') && opponent.name==='AI') return
    translateX.value = offsetX.value + translationX
    translateY.value = offsetY.value + translationY
  }

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
      isGestureActive.value = true;
    },
    onActive: ({ translationX, translationY }) => {
      runOnJS(movingPiece)(translationX, translationY)
    },
    onEnd: () => {
      const from = toPosition({ x: offsetX.value, y: offsetY.value });
      const to = toPosition({ x: translateX.value, y: translateY.value });
      runOnJS(movePiece)(from, to);

    },
  });

  const style = useAnimatedStyle(() => ({
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: SIZE,
    height: SIZE,
    zIndex: isGestureActive.value ? 100 : 10,
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));
  const topmost = useAnimatedStyle(() => {
    return {
      position: "absolute",
      width: SIZE,
      height: SIZE,
      zIndex: 0,
      backgroundColor: isGestureActive.value
        ? "rgba(255, 255, 0, 0.5)"
        : "transparent",
      transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
    };
  });
  const underlay = useAnimatedStyle(() => {
    const position = toPosition({ x: translateX.value, y: translateY.value });
    const translation = toTranslation(position);
    return {
      position: "absolute",
      width: SIZE,
      height: SIZE,
      zIndex: 0,
      backgroundColor: isGestureActive.value
        ? "rgba(255, 255, 0, 0.5)"
        : "transparent",
      transform: [{ translateX: translation.x }, { translateY: translation.y }],
    };
  });


  return (
    <>
      <Animated.View style={topmost} />
      <Animated.View style={underlay} />
      <PanGestureHandler onGestureEvent={onGestureEvent} enabled={opponent.name==='AI'?true:enabled}>
        <Animated.View style={style}>
          <Image source={PIECES[id]} style={styles.piece} />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default Piece;
