import React from "react";
import { View } from "react-native";
import Row from "./Row";

const Background = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      {new Array(8).fill(0).map((_, row) => (
        <Row key={row} row={row} />
      ))}
    </View>
  );
};

export default Background;
