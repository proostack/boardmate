import React, { Dispatch, SetStateAction } from 'react'
import { Text,Center,Box, FlatList, Button, HStack, Input, Icon} from "native-base";
import {AntDesign} from "@expo/vector-icons"
import {MaterialIcons} from "@expo/vector-icons"
interface Props {
  label:string;
  input:string;
  setVisibility:()=>void;
  visiblity:boolean;
  setEditable:()=>void;
  editable:boolean;
setUserName:Dispatch<SetStateAction<string>>
}
const InputField = ({input,label,visiblity,setVisibility,setEditable,setUserName}:Props):JSX.Element => {
  return (
    <>
    <Text color={"white"} fontFamily={"ReadexProBold"} fontSize={14} mb={"5px"}>{label}</Text>
    <Input onChangeText={setUserName} type={label==="Password"&&visiblity?"password":"text"} InputRightElement={<Icon mr={"12px"} as={label==="Username"?<AntDesign name="edit" size={24} color="white" onPress={setEditable}/>: label==="Password"? <MaterialIcons onPress={setVisibility}  name={visiblity?'visibility-off':"visibility"} />:null}/>} 
    variant={"unstyled"} fontFamily={"ReadexProBold"} value={input} editable={label=="Username"&&true} bgColor="rgba(52, 54, 76, 1)" borderRadius={8} fontSize={12} color="white" h={44} px={"12px"}
    />
    </>
  )
}

export default InputField