import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet} from "react-native";
import { Box, Button, HStack,Image } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props{
  setShowChat:()=>void
  setShowPawn:()=>void
  setShowTheme:()=>void
}

const ChessBottomTab = ({setShowChat,setShowPawn,setShowTheme}:Props): JSX.Element => {
  return (
    <HStack bgColor={"#201F2A"} mt="55px" h="64px" mx={"27px"} borderRadius="50px" alignItems={"center"} justifyContent="space-around">
      <MaterialCommunityIcons  name="flash-outline" size={30} color="#F6F6F6" style={styles.icons} />
      <Ionicons onPress={setShowTheme} name="settings-outline" size={30} color="#F6F6F6" style={styles.icons} />
      <Button variant={"unstyled"} onPress={setShowChat}>
      <Image source={require("../../../../assets/images/chessGame/Message.png")} alt="message"/>
      </Button>
      <Image source={require("../../../../assets/images/chessGame/flag.png")} alt="flag"/>
    </HStack>)
}

export default ChessBottomTab

const styles=StyleSheet.create({
  icons:{opacity:.3}
})