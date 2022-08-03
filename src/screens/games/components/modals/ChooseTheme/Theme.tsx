import { Box, Button, Circle, FlatList, HStack, Image, Text } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Icons } from '../../../../../app'
import Modal from '../../../../../components/Modal'

const theme = [
  Icons.theme1,
  Icons.theme2,
  Icons.theme3,
]

const playOptions = [
  Icons.playopt1,
  Icons.playopt2,
  Icons.playopt3
]

interface Props {
  handleClose: () => void;
  showTheme: boolean;
}
const Theme = ({ handleClose, showTheme }: Props): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(true)
  return (

    <Modal handleClose={handleClose} showModal={showTheme}>
      <Box w={"90%"} maxW={"331px"} px={"11px"} bgColor={"darkTheme.50"} borderRadius="6px">
        <Text fontFamily={"ReadexProBold"} color="white" mb="50px" mt="72px">
          Choose Theme
        </Text>
        <FlatList data={theme} numColumns={3} columnWrapperStyle={styles.columnWrapper1}
          renderItem={({ item, index }) => (
            <Image key={index} source={item} alt="theme" />
          )} />

        <HStack mt="50px" justifyContent={"space-between"} alignItems="center">
          <Text fontFamily={"ReadexProBold"} color="white">Sounds</Text>
          <Button variant={"unstyled"} onPress={() => setToggle(!toggle)}>
            <Box w={28} mx="5px" position="relative" alignItems={toggle ? "flex-end" : "flex-start"} justifyContent={"center"} px={.5} borderColor="white" borderWidth={3} borderRadius="50px" h={17}>
              <Circle size={2} bgColor="white"></Circle>
            </Box>
          </Button>
        </HStack>

        <HStack mt="50px" mb="87px" alignItems={"center"} justifyContent="space-between">
          <Text fontFamily={"ReadexProBold"} color="white">Play as</Text>
          <FlatList data={playOptions} numColumns={3} columnWrapperStyle={styles.columnWrapper2} renderItem={({ item, index }) => (
            <Image key={index} mx="5px" size={31} source={item} alt="play option" />
          )} />
        </HStack>
      </Box>
    </Modal>
  )
}

export default React.memo(Theme)

const styles = StyleSheet.create({
  columnWrapper1: { justifyContent: "space-between" },
  columnWrapper2: { justifyContent: "flex-end" }
})