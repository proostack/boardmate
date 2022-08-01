import { Box, Button, Circle, HStack, Image, Text } from 'native-base'
import React, { useRef, useState } from 'react'
import Modal from '../../../../../components/Modal'
import { AntDesign } from '@expo/vector-icons';
import { ImageRequireSource, StyleSheet } from 'react-native';
import { ChessInstance } from 'chess.js';

interface Props{
  winnerImg:ImageRequireSource,
  winnerName:string,
  loserName:string,
  loserImg:ImageRequireSource;
  chess: ChessInstance
}


const Win_Lose = ({winnerImg,winnerName,loserName,loserImg,chess}:Props): JSX.Element => {
const [show,setShow]=useState(false)
const handleClose=()=>{
  setShow(false)
}

if(chess.game_over()){
 setShow(true)
}
// console.log(chess.game_over())
  return (
    <Modal showModal={show} handleClose={handleClose}>
      <Box bgColor={"darkTheme.50"} w={"100%"} height="100%">
        <HStack justifyContent={"flex-end"}  >
          <AntDesign onPress={handleClose} style={styles.close} name="close" size={24} color="white" />
        </HStack>
        <Text fontSize="28px" fontFamily="ReadexProBold" textTransform={"uppercase"} textAlign="center" color="white">
          You win
        </Text>
        <HStack mt="87px">
          <Box w="60%" alignItems={"center"}>
            <Text color="white" textAlign={"center"} fontFamily={"ReadexProRegular"}>
              You
            </Text>
            <Circle mt="75px" size={"80px"} bgColor="accent_bg.50">
              <Image source={winnerImg} alt="avatar" w={42} h={42}/>
            </Circle>
          </Box>
          <Box mt="95px" w="40%" alignSelf={"flex-end"} alignItems={"center"}>
            <Text mb="35px" color="white" textAlign={"center"} mt="12px" fontFamily={"ReadexProRegular"}>
              @coseQueen
            </Text>
            <Circle size="60px" bgColor="accent_bg.50">
              <Image source={loserImg} alt="avatar" w={42} h={42}/>
            </Circle>
          </Box>
        </HStack>
        <Button w="80%" mt="87px"mx="auto" bgColor="white" py="21px">
        <Text color="accent_bg.50" fontFamily="ReadexProRegular">
          Analysis
          </Text>
        </Button>

        <Button w="80%" mx="auto" mt="50px" bgColor="accent_bg.50" py="21px">
        <Text color="white" fontFamily="ReadexProRegular">
          Replay
          </Text>
        </Button>
      </Box>
    </Modal>
  )
}

export default Win_Lose

const styles = StyleSheet.create({
  close: {
    marginTop: 37,
    marginRight: 24
  }
})