import { Box, FlatList, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Icons } from '../../../../../app'
import Modal from '../../../../../components/Modal'
import Card from './Card'
const pawn = [
  Icons.queen,
  Icons.knight,
  Icons.bishop,
  Icons.rook
]
interface Props {
  handleClose: () => void;
  showPawn: boolean;
}
const PromotePawn = ({ handleClose, showPawn }: Props): JSX.Element => {
  return (
    <Modal handleClose={handleClose} showModal={showPawn}>
      <Box w={"90%"} maxW={"331px"}>
        <Box bgColor={"#3A3948"} pb={10} borderRadius="6px"  >
          <Text mt={"37px"} color="white" textAlign={"center"} fontFamily={"ReadexProBold"}>Promote pawn to?</Text>
          <FlatList columnWrapperStyle={styles.pawnContainer} data={pawn} numColumns={2}
            renderItem={({ item, index }) => (
              <Card key={index} {...item} />
            )} />
        </Box>
      </Box>
    </Modal>
  )
}

export default React.memo(PromotePawn)

const styles = StyleSheet.create({
  pawnContainer: {
    justifyContent: "space-around"
  }
})