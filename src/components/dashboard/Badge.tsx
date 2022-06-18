import React from 'react'
import { Text,  Circle, Image, HStack } from "native-base";

interface Props {
  name: string;
  color: string;
}

const Badge = ({name,color}:Props):JSX.Element => {
  return (

          <HStack w={127} justifyContent="space-between" alignItems={"center"} bgColor="white" shadow={9} borderRadius={20}>
                
          <Text ml="9px" fontFamily={"ReadexProRegular"}>{name}</Text>
       
          <Circle size={42} bgColor={color}>
<Image source= {require("../../../assets/images/badgeIcon.png")} alt="badge"/>
</Circle>

          </HStack>

  )
}

export default Badge