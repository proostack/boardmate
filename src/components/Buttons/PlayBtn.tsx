import React from 'react'
import { Text,  Button as NativeBtn } from "native-base";
interface Props{
  text:string;
  callback?:()=>void;
  color?:string;
  textColor?:string;
}

const PlayBtn = ({text,callback,color,textColor}:Props):JSX.Element => {
  return (

    <NativeBtn onPress={callback} width="77px" fontFamily="ReadexProBold" p={0} height="28px" backgroundColor={color?color:"white"} borderRadius={8}>
    <Text fontFamily="ReadexProBold" fontSize={10} color={textColor}>{text}</Text>
    </NativeBtn>

  )
}

export default PlayBtn