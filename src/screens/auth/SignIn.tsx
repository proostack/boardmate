import React, { useState } from "react";
import { Box, Center,  Text} from "native-base";
import FormHeader from "../../components/Headers/FormHeader";
import InputField from "../../components/InputField";
import Button from "../../components/Buttons/Button";
import FaceBook_Google from "../../components/FaceBook_Google";
import { AuthNavigationProps,DashBoardNavProps } from "../../types/routes";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/user';

const signinSchema = yup.object({
  email: yup.string().required("This field is required").email('Invalid email address'),
  password: yup.string().required("This is a required field").min(6)
})



const SignIn = ({navigation}:AuthNavigationProps<"Login">): JSX.Element => {
  // const [email, setEmail] = useState<string>("")
  // const [password, setpassword] = useState<string>("")
  const dispatch=useDispatch()

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

<Formik initialValues={{email:"",password:""}} validationSchema={signinSchema} onSubmit={() => {
// navigation.navigate("Dashboard");
dispatch(setToken())
}}> 
{
  ({handleSubmit,handleChange,values,errors,touched}) => (
    <>
  
    <InputField input={values.email} getInput={handleChange('email')} label="Email" />

    <Text color={"red.500"} mb={15}>{touched.email && errors.email}</Text>
  <InputField input={values.password} getInput={handleChange('password')} label="Password" setVisibilty={setVisibilty} visibility={show} />
  <Text color={"red.500"}>{touched.password && errors.password}</Text>
  {/* <Onboarding /> */}
 
  <Text textAlign="right" color="accent_bg.50" mt={30} mb={50} onPress={()=>navigation.navigate("ChooseHow")}>Forgot password?</Text>
  
  <Center mb={30}>
  <Button text="Login" callback={handleSubmit} />
  </Center>
  </>
  )
}
        </Formik>
        <FaceBook_Google/>
      </Box>
    </Box>

  );
};

export default SignIn;



