import { Box, ScrollView, Text, Input, TextArea, HStack, Circle, Icon } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Modal from '../../../../../components/Modal'
import ReceiveFrom from './ReceiveFrom'
import SendTo from './SendTo'
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface Props{
  name:string
}
const Chat = ({name}:Props):JSX.Element => {
  return (
    <Modal>
      <Box position="absolute" bottom={0} w="100%" left={0}>
      <Circle mb={22} mr={"13px"} size={30} mt="15px" alignSelf={"flex-end"} bgColor="darkTheme.50" >
      <MaterialCommunityIcons name="close" size={14} color="white"  />
        </Circle>
      <Box px="29px" bgColor={"darkTheme.50"} h={300}   borderRadius="20px">
        <Text textAlign={"center"} mt="12px" fontFamily={"ReadexProRegular"} color="white">{name}</Text>
        <SafeAreaView style={{ flex: 1, marginTop: 12 }}>
          <ScrollView borderTopWidth={1} borderColor="#282A38">
            <Box>
              <SendTo text='Hello'/>
              <ReceiveFrom text='Hi There'/>
              <SendTo text='Oh yes i am!'/>
              <ReceiveFrom text='Very Nice'/>
              <SendTo text='Lets Begin'/>
            </Box>
          </ScrollView>
        </SafeAreaView>
        <HStack>
        <TextArea mr="10px" InputRightElement={<Icon as={<MaterialCommunityIcons  name="send"  /> } color="#794DE3"  size={"20px"} mr="9px"/>}
         flex={1}  color="white" h={62} autoCompleteType variant="unstyled" borderRadius={8} pt="21px" mb="15px" bgColor="darkTheme.100" placeholder='Type a message'/>

        <Circle size={30} mt="15px" bgColor="accent_bg.50">
        <MaterialCommunityIcons name="microphone-outline" size={17} color="white"/>
        </Circle>

        </HStack>
      </Box>
      </Box>
    </Modal>
  )
}

export default Chat