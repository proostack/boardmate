import React from 'react'
import { Box,Icon, Input, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 

interface Props{
  label:string;
  getInput:any;
  input:any;
  visibility?:boolean;
  setVisibilty?:any;
}
const InputField = (props:Props) => {
  return (
    <Box>
<Text fontSize={16} fontFamily="ReadexProBold" color="#393939" mb={13}>{props.label}</Text>
<Input bgColor="#F9F9FA" value={props.input} onChangeText={props.getInput} variant="unstyled" w="100%" h="66" fontSize={16} placeholder={`Enter ${props.label}`} InputRightElement={<Icon as={props.label==="Password"&&<MaterialIcons onPress={props.setVisibilty} name={props.visibility?'visibility':'visibility-off'}/>} size={5} mr={5}/>}
type={props.visibility?"password":"text"}/>
</Box>
    )
}

export default InputField

// 