import React from 'react'
import { Square, Center } from 'native-base'
import { Dimensions,StyleSheet } from 'react-native'
const {width,height}=Dimensions.get("screen");
interface Props{
  children:JSX.Element,
  // handleClose:()=>void,
  // showModal:boolean
}

const CustomModalWrapper = ({children}:Props) => {
  return (
 <Square w={width} h={height} style={styles.modal} position="absolute" top="0" left="0" zIndex={100}>

{children}

</Square> )
}

export default CustomModalWrapper


const styles=StyleSheet.create({
  modal:{backgroundColor:"rgba(0,0,0,.7)"}
})




