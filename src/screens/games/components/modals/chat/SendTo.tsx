import React from 'react'
import { Box, Text } from 'native-base'
interface Props {
  text: string
}
const SendTo = ({ text }: Props): JSX.Element => {
  return (
    <Box alignSelf={"flex-start"} borderRadius="10px" borderBottomLeftRadius={0} mb={5} bgColor={"darkTheme.100"} px="12px" py="15px">
      <Text color="white" fontSize={"12px"} fontFamily="MulishRegular" maxW={"178px"} lineHeight={"15px"}>{text}
      </Text>
    </Box>)
}

export default SendTo