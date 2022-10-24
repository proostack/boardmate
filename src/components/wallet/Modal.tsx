import { Modal as NativeModal, Center } from 'native-base'
import React from 'react'

interface Props {
  children: JSX.Element,
  handleClose: () => void,
  showModal: boolean
}

const Modal = ({ children, showModal, handleClose }: Props): JSX.Element => {
  return (
    <Center>
      <NativeModal isOpen={showModal} onClose={handleClose}>
        {children}
      </NativeModal>
    </Center>
  )
}
export default Modal

