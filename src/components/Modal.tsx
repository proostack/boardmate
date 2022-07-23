import { Square } from 'native-base'
import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'

interface Props{
  children:JSX.Element
}

const {width,height}=Dimensions.get("screen")

const Modal = ({children}:Props):JSX.Element => {
  return (
    <Square w={width}  h={height} style={styles.modal} position="absolute" top="0" left="0" zIndex={100}>
      {children}
    </Square>
  )
}

const styles=StyleSheet.create({
  modal:{backgroundColor:"rgba(0,0,0,.7)"}
})

export default Modal