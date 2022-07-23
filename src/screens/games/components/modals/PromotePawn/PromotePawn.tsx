import { Box, FlatList, Text } from 'native-base'
import React from 'react'
import {  StyleSheet } from 'react-native'
import Modal from '../../../../../components/Modal'
import Card from './Card'
const pawn=[
  {image:require("../../../../../../assets/images/chessGame/purpleQueen.png"),pawn:"Queen"},
  {image:require("../../../../../../assets/images/chessGame/purpleKnight.png"),pawn:"Knight"},{image:require("../../../../../../assets/images/chessGame/purpleBishop.png"),pawn:"Bishop"},{image:require("../../../../../../assets/images/chessGame/rookPurple.png"),pawn:"Rook"}
]
interface Props{
  handleClose:()=>void;
  showPawn:boolean;
}
const PromotePawn = ({handleClose,showPawn}:Props):JSX.Element => {
  return (
    <Modal handleClose={handleClose} showModal={showPawn}>
      <Box w={"90%"} maxW={"331px"}>
    <Box bgColor={"#3A3948"} pb={10}  borderRadius="6px"  >
      <Text mt={"37px"} color="white" textAlign={"center"} fontFamily={"ReadexProBold"}>Promote pawn to?</Text>
      <FlatList columnWrapperStyle={styles.pawnContainer} data={pawn} numColumns={2} renderItem={({item,index})=>(
       <Card key={index} {...item}/>
      )}/>
    </Box>
    </Box>
  </Modal>
     )
}

export default PromotePawn

const styles=StyleSheet.create({
pawnContainer:{justifyContent:"space-around"}
})