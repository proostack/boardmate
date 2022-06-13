import React from 'react'
import { Text,  Button as NativeBtn } from "native-base";
interface Props{
  text:string;
  callback?:()=>void;
}

const Button = ({text,callback}:Props):JSX.Element => {
  return (

    <NativeBtn onPress={callback} width="100%" fontFamily="ReadexProBold" p={0} height={62} backgroundColor="accent_bg.50" borderRadius={12}>
    <Text fontFamily="ReadexProBold" fontSize={16} color="white">{text}</Text>
    </NativeBtn>

  )
}

export default Button