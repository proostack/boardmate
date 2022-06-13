import React from 'react'
import { Box, Icon, Input, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  label: string;
  getInput: (input: string) => void;
  input: string;
  visibility?: boolean;
  setVisibilty?: () => void;
}
const InputField = ({label,getInput,input,visibility,setVisibilty}: Props):JSX.Element => {
  return (
    <Box>
      <Text fontSize={16} fontFamily="ReadexProBold" color="#393939" mb={13}>{label}</Text>
      <Input bgColor="#F9F9FA" value={input} onChangeText={getInput} variant="unstyled" w="100%" h="66" fontSize={16} placeholder={label==="Confirm Password"?"Confirm Password":`${label}`}InputRightElement={<Icon as={(label.includes("Password")) && <MaterialIcons onPress={setVisibilty} name={visibility ? 'visibility' : 'visibility-off'} />} size={5} mr={5} />}
        type={visibility ? "password" : "text"} />
    </Box>
  )
}

export default InputField

// 