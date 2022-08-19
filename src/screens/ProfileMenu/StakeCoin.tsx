import { Box } from 'native-base'
import React from 'react'
import InGame from '../../components/StakeCoin/InGame'

const StakeCoin = ():JSX.Element => {
  return (
    <Box mx="auto" flex={1} maxW={375} px="20px">
      <InGame/> 
    </Box>
  )
}
export default StakeCoin