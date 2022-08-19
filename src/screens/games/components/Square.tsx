import React from "react";
import { View, Text } from "react-native";
import { KBLACK1, KWHITE1, KBLACK2, KWHITE2, KBLACK3, KWHITE3, } from "../utils/constants";
import { useSelector } from 'react-redux'
import { RootState } from "../../../store/store";

interface iSquareProps {
  row: number;
  col: number;
}

export const Square = ({ row, col }: iSquareProps): JSX.Element => {
  const { themes } = useSelector((state: RootState) => state.user)

  const KWHITE = themes[0].THEME ? KWHITE1 : themes[2].THEME ? KWHITE3 : KWHITE2
  const KBLACK = themes[0].THEME ? KBLACK1 : themes[2].THEME ? KBLACK3 : KBLACK2
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
