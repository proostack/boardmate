import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet} from "react-native";
import { Box, HStack,Image } from 'native-base';

const ChessBottomTab = (): JSX.Element => {
  return (
    <HStack bgColor={"#201F2A"} mt="55px" h="64px" mx={"27px"} borderRadius="50px" alignItems={"center"} justifyContent="space-around">
      <MaterialCommunityIcons name="flash-outline" size={30} color="#F6F6F6" style={styles.icons} />
      <Ionicons name="settings-outline" size={30} color="#F6F6F6" style={styles.icons} />
      <Image source={require("../../../../assets/images/chessGame/Message.png")} alt="message"/>
      <Image source={require("../../../../assets/images/chessGame/flag.png")} alt="flag"/>
    </HStack>)
}

export default ChessBottomTab

const styles=StyleSheet.create({
  icons:{opacity:.3}
})