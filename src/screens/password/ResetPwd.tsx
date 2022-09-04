import { Center } from 'native-base'
import React, { useState } from 'react'
import Button from '../../components/Buttons/Button'
import FormHeader from '../../components/Headers/FormHeader'
import InputField from '../../components/InputField'
import { AuthNavigationProps } from '../../types/routes'

const ResetPwd = ({ navigation }: AuthNavigationProps<"LoginPin">): JSX.Element => {
  const [pwd, setPwd] = useState("")
  const [newPwd, setNewPwd] = useState("")
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  return (
    <Center>
      <Center maxW={375} mt={71}>
        <FormHeader header='Reset password' />

        <InputField label='Password' input={pwd} getInput={setPwd} visibility={show} setVisibilty={handleShow} />

        <Center mt={30}>
          <InputField label='Confirm New Password' input={newPwd} getInput={setNewPwd} visibility={show} setVisibilty={handleShow} />
        </Center>

        <Center flexDir={"row"} mt={50}>
          <Button text='Reset Password' callback={() => navigation.navigate("Login")} />

        </Center>

      </Center>
    </Center>
  )
}

export default ResetPwd