import React from 'react'
import { Text,  Button as NativeBtn } from "native-base";
interface Props{
  text:string;
  disabled?:boolean;
  callback?:()=>void;
}

const Button = ({text,callback,disabled}:Props):JSX.Element => {
  return (

    <NativeBtn opacity={disabled?"0.4":"1"} disabled={disabled?true:false} onPress={callback} width="100%" fontFamily="ReadexProBold" p={0} height={62} backgroundColor="accent_bg.50" borderRadius={12}>
    <Text fontFamily="ReadexProBold" fontSize={16} color="white">{text}</Text>
    </NativeBtn>

  )
}

export default Button