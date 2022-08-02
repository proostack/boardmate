import { Box,  Text, HStack, Circle, Button, FlatList, Square } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import ReceiveFrom from './ReceiveFrom'
import SendTo from './SendTo'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomModalWrapper from '../CustomModalWrapper'
import CustomTextArea from './CustomTextArea'
interface Props {
  name: string,
  handleClose: () => void;
  showChat: boolean
}

const Chat = ({ name, handleClose, showChat }: Props): JSX.Element => {
  const messages: { sent: string[]; replies: string[] } = {
    sent: [],
    replies: ["hello"]
  }
  const [handleMessage, setHandleMessage] = useState(messages);
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    if (message) {
      setHandleMessage({ ...handleMessage, sent: [...handleMessage.sent, message] })
      setMessage("")
    }
  }

  return (
    <CustomModalWrapper showModal={showChat}>
      <Box position="absolute" bottom={0} w="100%" left={0}>
        <Button variant={"unstyled"} alignSelf={"flex-end"} onPress={handleClose}>
          <Circle mb={22} mr={"13px"} size={30} mt="15px" bgColor="darkTheme.50" >
            <MaterialCommunityIcons name="close" size={14} color="white" />
          </Circle>
        </Button>
        <Box bgColor={"darkTheme.50"} h={300} borderRadius="20px">
          <Text textAlign={"center"} mt="12px" fontFamily={"ReadexProRegular"} color="white">{name}</Text>
          <SafeAreaView style={styles.chatArea}>
            {handleMessage.sent.length === 0 ? (
              <Square flex={1}>
                <Text color={"gray.100"} fontSize="2xl">Start a conversation </Text>)
              </Square>
            ) : (
              <Box px={"29px"}>
                <FlatList data={handleMessage.sent} renderItem={({ item, index }) => (
                  <>
                    {index < handleMessage.replies.length && (
                      <ReceiveFrom text={handleMessage.replies[index]} />
                    )}
                    <SendTo text={item} />
                  </>
                )} />
              </Box>
            )
            }
          </SafeAreaView>
          <HStack>
            <CustomTextArea message={message} setMessage={setMessage} handleSend={handleSubmit} />
            <Circle size={30} mt="15px" mr="13px" bgColor="accent_bg.50">
              <MaterialCommunityIcons name="microphone-outline" size={17} color="white" />
            </Circle>
          </HStack>
        </Box>
      </Box>
    </CustomModalWrapper>
  )
}

export default Chat

const styles = StyleSheet.create({
  chatArea: {
    flex: 1,
    marginTop: 12,
    borderTopWidth: 1,
    borderColor: "#282A38"
  }
})