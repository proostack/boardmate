import React from 'react'
import { Box, Text } from 'native-base'
import { JsxAST } from 'react-native-svg'
interface Props{
  text:string
}
const ReceiveFrom = ({text}:Props):JSX.Element => {
  return (
    <Box mb="5" alignSelf={"flex-end"} borderRadius="10px" borderBottomRightRadius={0} bgColor={"accent_bg.50"} px="12px" py="15px">
    <Text color="white" fontSize={"12px"} fontFamily="MulishRegular" maxW={"178px"} lineHeight={"15px"}>{text}</Text>
    </Box>
  )
}

export default ReceiveFrom