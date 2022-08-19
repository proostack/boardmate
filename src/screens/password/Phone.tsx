/* eslint-disable react/no-children-prop */
import React from 'react'
import { Box, Center, Input, InputGroup, InputLeftAddon, Text } from 'native-base'
import Button from '../../components/Buttons/Button'
import FormHeader from '../../components/Headers/FormHeader'
import { AuthNavigationProps } from '../../types/routes'
import {useSelector} from "react-redux"
import {RootState} from "../../store/store"
const Phone = ({navigation}:AuthNavigationProps<"Email">):JSX.Element => {
const {user}=useSelector((state:RootState)=>state.user)
// const {user}=useSelector((state:any)=>state.user)


  return (
    
    <Box alignItems="center" >
  <Center mt={71}  maxWidth={375}>
      <FormHeader header='Forgot Your Password' text="Enter your phone number to recover 😪"/>
   <Center mt={50}>

   {user.phone?( <InputGroup  w={{
        base: "100%",
        md: "285"
      }}  >

      
        <InputLeftAddon height={66} borderWidth={0} children={<Text borderRightWidth={1} borderColor="#ECECEC" color="#393939C2" fontSize={16} paddingRight={10}>{user.phone[0]}</Text>} w="40%" />
        <Input borderRadius={12} keyboardType='number-pad' variant="unstyled" w={{
          base: "60%",
          md: "300"
        }} bgColor="#F9F9FA"  placeholder="Phone no." fontSize={16}/>

      </InputGroup>):<Text textAlign={"center"} fontSize="3xl" fontFamily={"ReadexProBold"}>No Phone number</Text>
      }


  
     </Center> 


     <Center flexDir={"row"} mt={50}>
   <Button text='Reset Password' callback={()=>navigation.navigate("ResetPin")}/>
     </Center>
     <Text color="#2D2D2D99" mt="30">Remember your Password? <Text color="accent_bg.50" bold onPress={()=>navigation.navigate("Login")}>Sign in</Text></Text>
    </Center>


  
    </Box>
  )
}

export default Phone