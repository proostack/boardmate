import { Icon, TextArea } from 'native-base'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
interface Props {
  setMessage: (text: string) => void;
  handleSend: () => void
  message: string
}
const CustomTextArea = ({ setMessage, message, handleSend }: Props): JSX.Element => {

  return (
    <TextArea value={message} fontSize={"12px"} onChangeText={setMessage} ml={"7px"} mr="10px"
    InputLeftElement={
      <Icon onPress={handleSend} as={    <FontAwesome5 name="smile" size={24} color="#794DE3" /> 

      }
        color="#794DE3" size={"20px"} ml="10px" mr="9px" />
    }
    InputRightElement={
        <Icon onPress={handleSend} as={<MaterialCommunityIcons name="send" />
        }
          color="#794DE3" size={"20px"} mr="9px" />
      }
     
      flex={1} color="white" h={62}
      autoCompleteType
      variant="unstyled" borderRadius={8}
      mb="15px" bgColor="darkTheme.100"
      placeholder='Type a message'
      textAlignVertical='center'
    />
  )
}

export default CustomTextArea