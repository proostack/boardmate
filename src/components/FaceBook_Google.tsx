import React from 'react'
import { Image, Box,  Text, } from "native-base";
import { Icons } from '../app';

const FaceBook_Google = ():JSX.Element => {
  return (
    <Box>
      <Text color="accent_bg.50" fontSize={13} textAlign="center" fontFamily="ReadexProLight">Or Sign In with;</Text>
    <Box flexDirection="row" justifyContent="center" mt={5}>
      <Image source={Icons.facebook} mr={7} alt="facebook"/>
      <Image source={Icons.google} alt="google"/>
    </Box>
    </Box>
  )
}

export default FaceBook_Google