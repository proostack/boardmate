import React from "react";
import { View } from "react-native";
import { Square } from "./Square";

interface RowProps {
  row: number;
}
const Row = ({ row }: RowProps): JSX.Element => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {new Array(8).fill(0).map((_, col) => (
        <Square key={col} row={row} col={col} />
      ))}
    </View>
  );
};

export default Row;
