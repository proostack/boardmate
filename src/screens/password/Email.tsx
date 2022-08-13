import { Box, Center, Text } from 'native-base'
import React from 'react'
import Button from '../../components/Buttons/Button'
import FormHeader from '../../components/Headers/FormHeader'
import InputField from '../../components/InputField'
import { AuthNavigationProps } from '../../types/routes'

const Email = ({navigation}:AuthNavigationProps<"Email">):JSX.Element => {
  const [email, setEmail] = React.useState<string>("")
  return (
    
    <Box alignItems="center" >
  <Center mt={71}  maxWidth={375}>
      <FormHeader header='Forgot Your Password' text="Enter your email address to recover 😪"/>
   <Center mt={50}>
   <InputField label='Email' input={email} getInput={setEmail}/>
     </Center> 


     <Center flexDir={"row"} mt={50}>
   <Button text='Reset Password' callback={()=>navigation.navigate("ResetPin")}/>
     </Center>
<Text color="#2D2D2D99" mt="30">Remember your Password? <Text color="accent_bg.50" bold onPress={()=>navigation.navigate("Login")}>Sign in</Text></Text>
    </Center>
  
    </Box>
  
  )
}

export default Email