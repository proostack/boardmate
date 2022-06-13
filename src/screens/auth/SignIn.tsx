import React, { useState } from "react";
import { Box, Center,  Text} from "native-base";
import Onboarding from "../Onboarding";
import FormHeader from "../../components/Headers/FormHeader";
import InputField from "../../components/InputField";
import Button from "../../components/Buttons/Button";
import FaceBook_Google from "../../components/FaceBook_Google";
import { AuthNavigationProps } from "../../types/routes";
const SignIn = ({navigation}: AuthNavigationProps<"Login">): JSX.Element => {
  const [email, setEmail] = useState<string>("")
  const [pwd, setPwd] = useState<string>("")
  const [show, setShow] = useState<boolean>(true)

  const setVisibilty = () => {
    setShow(!show)
  }
  return (
    <Box alignItems="center" w="100%" mt={71}>
      <Box w={375}>
        <Box mb={65}>
          <FormHeader text="Welcome back! Login to access your account 🤩" header="Login" />
        </Box>
        <Center mb={15}>
          <InputField input={email} getInput={setEmail} label="Email" />
        </Center>
        <InputField input={pwd} getInput={setPwd} label="Password" setVisibilty={setVisibilty} visibility={show} />
        {/* <Onboarding /> */}
        <Text textAlign="right" color="accent_bg.50" mt={30} mb={50} onPress={()=>navigation.navigate("ChooseHow")}>Forgot password?</Text>
        
        <Center mb={30}>
        <Button text="Login" />
        </Center>

        <FaceBook_Google/>
    
      </Box>
    </Box>

  );
};

export default SignIn;
