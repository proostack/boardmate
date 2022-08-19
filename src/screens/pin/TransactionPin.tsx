import { Box, Text } from 'native-base'
import React from 'react'
import Pin from '../../components/Pin'

const TransactionPin = ():JSX.Element => {
  return (
    <Box  maxWidth={375} mx="auto" mt="32px">
    <Text color={"grey"} textAlign="right">Skip</Text>
    <Pin header='PIN' headerText='Set up a unique PIN for your financial transactions'/>
    </Box>
  )
}

export default TransactionPin