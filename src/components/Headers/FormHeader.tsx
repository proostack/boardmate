import React from 'react'
import { Box, Heading, Text} from "native-base";

interface Props {
  text?: string;
  header: string
}

const FormHeader = ({ text, header }: Props): JSX.Element => {
  return (
    <Box>
      <Heading textAlign="center" fontFamily="ReadexProBold">{header}</Heading>
      <Text textAlign="center" mt={25} fontSize="12" fontFamily="ReadexProLight" opacity={.7} color="#393939">
        {text}
      </Text>
    </Box>
  )
}

export default FormHeader