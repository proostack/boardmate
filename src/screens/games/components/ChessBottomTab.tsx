import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { Button, HStack, Image } from 'native-base';
import { Icons } from '../../../app';
interface Props {
  setShowChat: () => void
  setShowPawn: () => void
  setShowTheme: () => void
  setShowQuit: () => void
}

const ChessBottomTab = ({ setShowChat, setShowPawn, setShowTheme, setShowQuit }: Props): JSX.Element => {
  return (
    <HStack bgColor={"#201F2A"} mt="55px" h="64px" mx={"27px"} borderRadius="50px" alignItems={"center"} justifyContent="space-around">
      <Button variant={"unstyled"} >
        <MaterialCommunityIcons name="flash-outline" size={30} color="#F6F6F6" style={styles.icons} />
      </Button>
      <Button variant={"unstyled"} onPress={setShowTheme}>
        <Ionicons name="settings-outline" size={30} color="#F6F6F6" style={styles.icons} />
      </Button>
      <Button variant={"unstyled"} onPress={setShowChat}>
        <Image source={Icons.message} alt="message" />
      </Button>
      <Button variant={"unstyled"} onPress={setShowQuit}>
        <Image source={Icons.flag} alt="flag" />
      </Button>
    </HStack>
    )
}

export default ChessBottomTab

const styles = StyleSheet.create({
  icons: {
    opacity: .3
  }
})