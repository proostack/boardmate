import React from 'react'
import { Box, Container,Heading, Text, VStack } from "native-base";

interface Props{
text?:string;
header:string
}

const FormHeader = (props:Props) => {
  return (
    <Box>
    <Heading textAlign="center" fontFamily="ReadexProBold">{props.header}</Heading>
    <Text textAlign="center" mt={25} fontSize="12" fontFamily="ReadexProLight" opacity={.7} color="#393939">{props.text}</Text>
    </Box>
  )
}

export default FormHeader