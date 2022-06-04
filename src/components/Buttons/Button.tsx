import React from 'react'
import { Box, Container, Text, VStack, Button as NativeBtn } from "native-base";

interface Props{
text:string
}


const Button = (props:Props) => {
  return (

    <NativeBtn  width="100%" fontFamily="ReadexProBold" p={0} height={62} backgroundColor="accent_bg.50" borderRadius={12}>
    <Text fontFamily="ReadexProBold" fontSize={16} color="white">{props.text}</Text>
    </NativeBtn>

  )
}

export default Button