import { Box, Center,  Circle,  HStack, Radio, Text } from 'native-base'
import React, { useState } from 'react'
import Button from '../../components/Buttons/Button'
import FormHeader from '../../components/Headers/FormHeader'
import { AuthNavigationProps } from '../../types/routes'

const ChooseHow = ({navigation}:AuthNavigationProps<"ChooseHow">):JSX.Element => {
  const [option,setOption]=useState("phone number")

const handleResetPwd = () => {
  navigation.navigate(option==="phone number"?"Phone":"Email")
}

  return (
    <Center>
      <Box mt={71}>
        <FormHeader header='Forgot Your Password?' text='Choose how you want to recover your password'/>
        <Box my={50}>
        <Radio.Group  defaultValue={option} name="choose options" accessibilityLabel="choose options" onChange={(value)=>setOption(value)}>
          <HStack>
          <Radio value="email" my={1}>
        Email
      </Radio>
          </HStack>
     
     <HStack mt={30}>
     <Radio value="phone number" my={1}>
      Phone Number
      </Radio>
     </HStack>

     
    </Radio.Group>;
        </Box>
<Center >
<Button text="Reset Password" callback={handleResetPwd}/>
</Center>

<Text mt={30} fontFamily="ReadexProRegular" textAlign="center" color="#2D2D2D99">Remember your Password? <Text bold color="accent_bg.50" onPress={()=>navigation.navigate("Login")}> Sign in</Text></Text>
    
      </Box>
      </Center>
  )
}

export default ChooseHow