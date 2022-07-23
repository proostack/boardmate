import { Box, Circle, FlatList, HStack, Image, Text } from 'native-base'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from '../../../../../components/Modal'

const theme=[
  require("../../../../../../assets/images/chessGame/theme1.png"),
  require("../../../../../../assets/images/chessGame/theme2.png"),
  require("../../../../../../assets/images/chessGame/theme3.png")
]

const playOptions=[
  require("../../../../../../assets/images/chessGame/playopt1.png"),
  require("../../../../../../assets/images/chessGame/playopt2.png"),
  require("../../../../../../assets/images/chessGame/playopt3.png")
]
const Theme = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(true)
  return (
    <Modal>
      <Box w={"90%"} maxW={"331px"} px={"11px"} bgColor={"darkTheme.50"} borderRadius="6px">
        <Text fontFamily={"ReadexProBold"} color="white" mb="50px" mt="72px">
          Choose Theme
        </Text>
        <FlatList data={theme} numColumns={3} columnWrapperStyle={{ justifyContent: "space-between" }} renderItem={({ item, index }) => (
          <Image key={index} source={item} alt="theme" />
        )} />

        <HStack mt="50px" justifyContent={"space-between"} alignItems="center">
          <Text fontFamily={"ReadexProBold"} color="white">Sounds</Text>
          <TouchableOpacity onPress={() => setToggle(!toggle)}>
            <Box w={28} mx="5px" position="relative" alignItems={toggle ? "flex-end" : "flex-start"} justifyContent={"center"} px={.5} borderColor="white" borderWidth={3} borderRadius="50px" h={17}>
              <Circle size={2} bgColor="white"></Circle>
            </Box>
          </TouchableOpacity>
        </HStack>

        <HStack mt="50px" mb="87px" alignItems={"center"} justifyContent="space-between">
          <Text fontFamily={"ReadexProBold"} color="white">Play as</Text>
          <FlatList data={playOptions} numColumns={3} columnWrapperStyle={{ justifyContent: "flex-end" }} renderItem={({ item, index }) => (
            <Image key={index} mx="5px" size={31} source={item} alt="play option" />
          )} />


        </HStack>
      </Box>
    </Modal>
  )
}

export default Theme 