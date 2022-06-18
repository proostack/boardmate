import React from 'react'
import { Image, Box,  Text, } from "native-base";


const FaceBook_Google = () => {
  return (
    <Box>
      <Text color="accent_bg.50" fontSize={13} textAlign="center" fontFamily="ReadexProLight">Or Sign In with;</Text>
    <Box flexDirection="row" justifyContent="center" mt={5}>
      <Image source={require("../../assets/images/facebook.png")} mr={7} alt="facebook"/>
      <Image source={require("../../assets/images/google.png")} alt="google"/>
    </Box>
    </Box>
  )
}

export default FaceBook_Google