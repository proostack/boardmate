import { Box, Button, Center,  Text } from 'native-base'
import React from 'react';
import {Modal, StyleSheet} from "react-native";
interface IModal{
  visible:boolean;
  closeModal:()=>void;
  navToConversion:()=>void
  navToTransfer:()=>void
}
const SelectChoiceModal = ({visible,closeModal,navToConversion,navToTransfer}:IModal):JSX.Element => {
  return (
    <Modal animationType='slide'
    visible={visible}
    onRequestClose={closeModal}
    transparent={true}>
    <Box style={[styles.centeredView, {
      backgroundColor: "rgba(0, 0, 0, 0.32)"
    }]}>
      <Center w="90%"
        py="50px"
        bgColor={"darkTheme.50"}
      >
        <Text color="white"
          fontSize={"16px"}
          fontFamily={"ReadexProBold"}
        >
          Select your choice
        </Text>
        <Button onPress={navToTransfer}
          h="60px"
          mt="50px"
          w="90%"
          bgColor={"accent_bg.50"}
        >
          <Text
            fontSize={"16px"}
            fontFamily={"ReadexProBold"}
            color="white"
          >
            Transfer Coins
          </Text>
        </Button>

        <Button onPress={navToConversion}
          h="60px" mt="50px"
          w="90%"
          bgColor={"accent_bg.50"}
        >
          <Text fontSize={"16px"}
            fontFamily={"ReadexProBold"}
            color="white"
          >
            Convert Coins
          </Text>
        </Button>
      </Center>
    </Box>
  </Modal>  )
}

export default SelectChoiceModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});