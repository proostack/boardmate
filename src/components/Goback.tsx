import { Box, Button, HStack, Image, Text } from 'native-base'
import React from 'react'
interface Props{
  callback:()=>void;
}


const Goback = ({callback}:Props) => {
  return (
    <Button  onPress={callback} variant={"unstyled"}  w={90} >
          <HStack>
            <Box pr={17}>
              <Image source={require("../../assets/images/leftArrow.png")} alt="arrow-left" />
            </Box>
            <Text  fontFamily={"ReadexProBold"} mb={50}>
              GO BACK
            </Text>
          </HStack>
        </Button>
  )
}

export default Goback