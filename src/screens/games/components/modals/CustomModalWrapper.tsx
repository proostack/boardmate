import React from 'react'
import { Square } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get("screen");
interface Props {
  children: JSX.Element,
  // handleClose:()=>void,
  showModal: boolean
}

const CustomModalWrapper = ({ children, showModal }: Props): JSX.Element => {
  return (
    <Square display={showModal ? "flex" : "none"}
      w={width} h={height} style={styles.modal}
      position="absolute" top="0"
      left="0" zIndex={100}>
      {children}
    </Square>
    )

}

export default CustomModalWrapper


const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0,0,0,.7)"
  }
})

