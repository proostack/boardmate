import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from "react-native";

const ChessBottomTab = (): JSX.Element => {
  return (
    <View style={{ backgroundColor: "#201F2A", marginTop: 55, height: 64, marginHorizontal: 27, borderRadius: 50, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
      <MaterialCommunityIcons name="flash-outline" size={30} color="#F6F6F6" style={{ opacity: .3 }} />
      <Ionicons name="settings-outline" size={30} color="#F6F6F6" style={{ opacity: .3 }} />
      <Image source={require("../../../../assets/images/chessGame/Message.png")} />
      <Image source={require("../../../../assets/images/chessGame/flag.png")} />
    </View>)
}

export default ChessBottomTab