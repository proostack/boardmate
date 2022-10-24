import { Box, Button, Circle, HStack, Image, Text } from 'native-base'
import React, { useState } from 'react'
import Modal from '../../../../../components/Modal'
import { AntDesign } from '@expo/vector-icons';
import { ImageRequireSource, StyleSheet } from 'react-native';
import { ChessInstance } from 'chess.js';

interface Props {
  users: {
    id: number;
    name: string;
    image: ImageRequireSource;
    active: boolean;
    choose: boolean;
  }[],
  chess: ChessInstance;
}


const WinLose = ({ chess, users }: Props): JSX.Element | null => {
  const [show, setShow] = useState(true)
  const handleClose = () => {
    setShow(false)
  }

  if (chess.game_over()) {

    // lose via checkmate
    if (chess.in_checkmate()) {
      console.log("you lost via checkmate")
    }

    // match ended in a draw
    if (chess.in_draw()) {
      console.log("match drawn")
    }
    return (
      <Modal showModal={show} handleClose={handleClose}>
        <Box bgColor={"darkTheme.50"}
          w={"100%"} height="100%"
        >
          <HStack justifyContent={"flex-end"}  >
            <AntDesign onPress={() => setShow(false)}
              style={styles.close}
              name="close" size={24}
              color="white"
            />
          </HStack>

          <Text fontSize="28px"
            fontFamily="ReadexProBold"
            textTransform={"uppercase"}
            textAlign="center"
            color="white"
          >
            {(chess.turn() === "w" && chess.game_over()) ? "You lose" : "You win"}
          </Text>

          <HStack mt="87px"
            w="80%" mx="auto"
            alignItems={"center"}
            justifyContent={"space-between"}
          >

            <Box>
              <Text mb="19px" color="white"
                textAlign={"center"}
                fontFamily={"ReadexProRegular"}
              >
                {chess.turn() === "w" ? chess.header().Black : chess.header().White}
              </Text>

              <Circle size={"80px"}
                bgColor="accent_bg.50"
              >
                <Image source={chess.turn() === "w" ? users[1].image : users[0].image}
                  alt="avatar"
                  w={42} h={42}
                />
              </Circle>
            </Box>

            {/* score */}
            <Text color="white" fontFamily="ReadexProBold"
              mt="30px"
            >
              {chess.turn() === 'b' ? '0 - 1' : '1 - 0'}
            </Text>

            <Box>
              <Text mb="19px"
                color="white"
                textAlign={"center"}
                fontFamily={"ReadexProRegular"}
              >
                {chess.turn() === "b" ? chess.header().Black : chess.header().White}
              </Text>

              <Circle size="80px"
                bgColor="accent_bg.50"
              >
                <Image source={chess.turn() === "b" ? users[1].image : users[0].image}
                  alt="avatar"
                  w={42}
                  h={42}
                />
              </Circle>
            </Box>
          </HStack>

          {/* Ratings */}
          <Text textAlign={"center"}
            mt="21px"
            mb="16px"
            color="white"
            fontSize={"20px"}
            textTransform="uppercase"
            fontFamily={"ReadexProBold"}
          >
            Rating
          </Text>

          {
            chess.turn() === 'b' ? (
              <Text fontFamily={"ReadexProBold"}
                fontSize="20px"
                textAlign="center"
                color="white"
              >
                340 <Text color={"accent_bg.50"} fontSize={"15px"}> +24</Text>
              </Text>
            ) :
              (
                <Text fontFamily={"ReadexProBold"}
                  fontSize="20px"
                  textAlign="center"
                  color="white"
                >
                  340 <Text color={"red.500"} fontSize={"15px"}> -21</Text>
                </Text>
              )
          }


          <Button w="80%"
            mt="87px"
            mx="auto"
            bgColor="white"
            py="21px"
          >
            <Text color="accent_bg.50"
              fontFamily="ReadexProRegular"
            >
              Analysis
            </Text>
          </Button>

          <Button onPress={() => { handleClose(); }}
            w="80%" mx="auto"
            mt="50px"
            bgColor="accent_bg.50"
            py="21px"
          >
            <Text color="white"
              fontFamily="ReadexProRegular"
            >
              Replay
            </Text>
          </Button>
        </Box>
      </Modal>
    )
  }
  else {
    return null
  }
}

export default WinLose

const styles = StyleSheet.create({
  close: {
    marginTop: 37,
    marginRight: 24
  }
})