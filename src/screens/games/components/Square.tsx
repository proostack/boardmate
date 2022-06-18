import React from "react";
import { View, Text } from "react-native";
import { KBLACK, KWHITE } from "../utils/constants";

interface iSquareProps {
  row: number;
  col: number;
}
export const Square = ({ row, col }: iSquareProps): JSX.Element => {
  const backgroundColor = col % 2 === 0 ? KWHITE : KBLACK;
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <Text>{row}</Text>
      <Text>{col}</Text>
    </View>
  );
};
