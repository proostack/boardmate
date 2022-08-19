import React from 'react'
import { Text, Button as NativeBtn } from 'native-base'
interface Props{
  color?:string;
  bgColor?:string;
  borderColor?:string
  borderWidth?:number;
  text:string;
  onPress?:()=>void
}

const Button = ({color,bgColor,borderColor,borderWidth,text,onPress}:Props) => {
  return (
    <NativeBtn onPress={onPress} variant={"unstyled"} bgColor={bgColor} borderColor={borderColor} borderWidth={borderWidth} mt={"10px"}  w={70} >
    <Text fontFamily={"ReadexProBold"} color={color}>{text}</Text>
    </NativeBtn>
  )
}

export default Button