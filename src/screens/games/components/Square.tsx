import React from "react";
import { View, Text } from "react-native";
import { KBLACK, KWHITE } from "../utils/constants";

interface iSquareProps {
  row: number;
  col: number;
}
export const Square = ({ row, col }: iSquareProps): JSX.Element => {
  const offset = row % 2 === 0 ? 1 : 0;
  const backgroundColor = (col + offset) % 2 === 0 ? KWHITE : KBLACK;
  const color = (col + offset) % 2 === 0 ? KBLACK : KWHITE;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        padding: 4,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color, fontWeight: "500", opacity: col === 0 ? 1 : 0 }}>
        {8 - row}
      </Text>
      <Text
        style={{
          color,
          fontWeight: "500",
          alignSelf: "flex-end",
          opacity: row === 7 ? 1 : 0,
        }}
      >
        {String.fromCharCode("a".charCodeAt(0) + col)}
      </Text>
    </View>
  );
};
