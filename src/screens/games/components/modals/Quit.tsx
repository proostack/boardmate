import { Button, Square, Text } from 'native-base'
import React from 'react'
import Modal from '../../../../components/Modal'
interface Props {
  showQuit: boolean;
  handleCloseQuit: () => void;
  goBack:()=>void
}
const Quit = ({ handleCloseQuit, showQuit, goBack }: Props): JSX.Element => {
  return (
    <Modal showModal={showQuit} handleClose={handleCloseQuit}>
      <Square h={"306px"} maxW={"331px"} borderRadius={8} width="100%" bgColor={"darkTheme.50"}>
        <Text mb={"30px"} color="white" fontFamily="ReadexProBold">
          Sure about quitting
        </Text>
        <Button onPress={goBack} mb="50px" variant="unstyled" borderRadius={"12px"} w="90%" bgColor="#9C0000">
          <Text fontFamily={"ReadexProBold"} color="white" py="15px" >
            Yes, I quit
          </Text>
        </Button>
        <Button onPress={handleCloseQuit} variant="unstyled" borderRadius={"12px"} w="90%" bgColor="accent_bg.50">
          <Text fontFamily={"ReadexProBold"} color="white" py="15px" >
            Cancel
          </Text>
        </Button>
      </Square>
    </Modal>
  )
}

export default React.memo(Quit)