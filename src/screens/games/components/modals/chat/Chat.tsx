import { Box, ScrollView, Text,  TextArea, HStack, Circle, Icon, Button } from 'native-base'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import ReceiveFrom from './ReceiveFrom'
import SendTo from './SendTo'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomModalWrapper from '../CustomModalWrapper'
interface Props{
  name:string,
  handleClose:()=>void
}
const Chat = ({name,handleClose}:Props):JSX.Element => {
  return (
    <CustomModalWrapper>
      <Box position="absolute" bottom={0} w="100%" left={0}>
        <Button variant={"unstyled"} alignSelf={"flex-end"} onPress={handleClose}>
      <Circle mb={22} mr={"13px"} size={30} mt="15px"  bgColor="darkTheme.50" >
      <MaterialCommunityIcons name="close" size={14} color="white"  />
        </Circle>
        </Button>
      <Box bgColor={"darkTheme.50"} h={300}   borderRadius="20px">
        <Text textAlign={"center"} mt="12px" fontFamily={"ReadexProRegular"} color="white">{name}</Text>
        <SafeAreaView style={styles.chatArea}>
          <ScrollView borderTopWidth={1} borderColor="#282A38">
            <Box px={"29px"}>
              <SendTo text='Hello'/>
              <ReceiveFrom text='Hi There'/>
              <SendTo text='Oh yes i am!'/>
              <ReceiveFrom text='Very Nice'/>
              <SendTo text='Lets Begin'/>
            </Box>
          </ScrollView>
        </SafeAreaView>
        <HStack>
        <TextArea ml={"7px"} mr="10px" InputRightElement={<Icon as={<MaterialCommunityIcons  name="send"  /> } color="#794DE3"  size={"20px"} mr="9px"/>}
         flex={1}  color="white" h={62} autoCompleteType={false} variant="unstyled" borderRadius={8} pt="21px" mb="15px" bgColor="darkTheme.100" placeholder='Type a message'/>
        <Circle size={30} mt="15px" mr="13px" bgColor="accent_bg.50">
        <MaterialCommunityIcons name="microphone-outline" size={17} color="white"/>
        </Circle>
        </HStack>
      </Box>
      </Box>
    </CustomModalWrapper>
  )
}

export default Chat

const styles=StyleSheet.create({
  chatArea:{ flex: 1, marginTop: 12}
})