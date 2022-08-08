import { Box, Text } from 'native-base'
import React from 'react'
import Modal from '../../../../../components/Modal'
import Playoption from './Playoption'
import Sound from './Sound'
import Theme from './Theme'

interface Props {
  handleClose: () => void;
  showTheme: boolean;
}
const Settings = ({ handleClose, showTheme }: Props): JSX.Element => {
  return (

    <Modal handleClose={handleClose} showModal={showTheme}>
      <Box w={"90%"}
        maxW={"331px"}
        px={"11px"}
        bgColor={"darkTheme.50"}
        borderRadius="6px"
      >

        <Text
          fontFamily={"ReadexProBold"}
          color="white"
          mb="50px"
          mt="72px"
        >
          Choose Theme
        </Text>

        <Theme />
        <Sound />
        <Playoption />

      </Box>
    </Modal>
  )
}


export default React.memo(Settings)
