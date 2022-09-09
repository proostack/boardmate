import { Box, Text, Button } from 'native-base'
import React, { useState } from 'react'
import { Modal as NativeModal, StyleSheet } from "react-native"

interface IModalProps {
  children: JSX.Element,
  modalColor?: string,
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  confirm?: () => void
}

const Modal = ({
  children,
  modalColor,
  visible,
  setVisible,
  confirm }: IModalProps): JSX.Element => {
  const closeModal = () => {
    setVisible(false)
  }

  const handleConfirmBtn = () => {
    if (confirm) {
      confirm()
    }
    closeModal()
  }



  return (
    <Box style={styles.centeredView}>
      <NativeModal animationType='slide'
        visible={visible}
        onRequestClose={closeModal}
        transparent={true}>
        <Box style={[styles.centeredView, {
          backgroundColor: "rgba(0, 0, 0, 0.32)"
        }]}>
          <Box style={styles.modalView}
            w="90%"
            bgColor={modalColor}
          >
            {children}
            <Button my="15px"
              variant="unstyled"
              onPress={handleConfirmBtn}
              bgColor="accent_bg.50"
              w="full"
            >
              <Text
                color="white"
                fontSize="16px"
                fontFamily={"ReadexProBold"}
              >
                Confirm
              </Text>
            </Button>
            <Button onPress={closeModal}
              variant="unstyled"
              bgColor="#9C0000" w="full"
            >
              <Text fontFamily={"ReadexProBold"}
                color="white"
                fontSize="16px"
              >
                Cancel
              </Text>
            </Button>
          </Box>
        </Box>
      </NativeModal>
    </Box>
  )
}

export default Modal

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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

