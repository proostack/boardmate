import React, { useState } from 'react'
import { Box, Button, Circle, HStack, Text } from 'native-base'

const Sound = ():JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(true)

  return (
    <HStack mt="50px" justifyContent={"space-between"} alignItems="center">
    <Text fontFamily={"ReadexProBold"} color="white">Sounds</Text>
    <Button variant={"unstyled"} onPress={() => setToggle(!toggle)}>
      <Box w={28} mx="5px" position="relative" alignItems={toggle ? "flex-end" : "flex-start"} justifyContent={"center"} px={.5} borderColor="white" borderWidth={3} borderRadius="50px" h={17}>
        <Circle size={2} bgColor="white"></Circle>
      </Box>
    </Button>
  </HStack>

  )
}

export default Sound