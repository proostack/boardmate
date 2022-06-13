import React, { useState } from "react";
import { AuthNavigationProps } from "../../types/routes";
import { Box, Center, Text } from "native-base";
import InputField from "../../components/InputField";
import FormHeader from "../../components/Headers/FormHeader";
import FaceBook_Google from "../../components/FaceBook_Google";
import Button from "../../components/Buttons/Button";

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">): JSX.Element => {
  const [email, setEmail] = useState<string>("")
  const [pwd, setPwd] = useState<string>("")
  const [conPwd, setConPwd] = useState<string>("")
  const [show, setShow] = useState<boolean>(true)

  const setVisibilty = () => {
    setShow(!show)
  }

const handleNavigation = () => {
  navigation.navigate("Country")
}

  return (
    <Box alignItems="center" w="100%" mt={71}>
    <Box w={375}>
      <Box mb={65}>
        <FormHeader text="Hey! Before you begin playing let’s help you set up your account." header="Sign up" />
     
      </Box>
      <Center mb={15}>
        <InputField input={email} getInput={setEmail} label="Email" />
      </Center>
      <Center mb={15}>
      <InputField input={pwd} getInput={setPwd} label="Password" setVisibilty={setVisibilty} visibility={show} />
      </Center>

      <InputField input={conPwd} getInput={setConPwd} label="Confirm Password" setVisibilty={setVisibilty} visibility={show} />
      {/* <Onboarding /> */}
 
      
      <Center mb={30} mt={50}>
      <Button callback={handleNavigation} text="Next" />
      </Center>

      <FaceBook_Google/>
  
    </Box>
  </Box>

  );
};

export default SignUp;
