import React, { useState } from "react";
import { AuthNavigationProps } from "../../types/routes";
import { Box, Center, Text } from "native-base";
import InputField from "../../components/InputField";
import FormHeader from "../../components/Headers/FormHeader";
import FaceBook_Google from "../../components/FaceBook_Google";
import Button from "../../components/Buttons/Button";
import { Formik } from "formik";
import * as yup from "yup";


const signupSchema = yup.object({
  email: yup.string().required().test('email_valid', 'Invalid email', (value):boolean => {
    
    return value ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value):false
  }
    ),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().equals([yup.ref('password'),null], "Passwords must match").required()
})


const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">): JSX.Element => {
  // const [email, setEmail] = useState<string>("")
  // const [pwd, setPwd] = useState<string>("")
  // const [conPwd, setConPwd] = useState<string>("")
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

      <Formik initialValues={{email:"",password:"",confirmPassword:""}} validationSchema={signupSchema} onSubmit={()=>{
handleNavigation()
      }}>
{({handleSubmit,handleChange,values,errors,touched})=>(
  <>
  <Center mb={15}>
        <InputField input={values.email} getInput={handleChange('email')} label="Email" />
        <Text color="red.500">{touched.email&&errors.email}</Text>
      </Center>
      <Center mb={15}>
      <InputField input={values.password} getInput={handleChange('password')} label="Password" setVisibilty={setVisibilty} visibility={show} />
      <Text color="red.500">{touched.password&&errors.password}</Text>

      </Center>

      <InputField input={values.confirmPassword} getInput={handleChange('confirmPassword')} label="Confirm Password" setVisibilty={setVisibilty} visibility={show} />
      <Text color="red.500">{touched.confirmPassword&&errors.confirmPassword}</Text>

 
      <Center mb={30} mt={50}>
      <Button callback={handleSubmit} text="Next" />
      </Center>
  </>
)}
      
      </Formik>

      <FaceBook_Google/>
  
    </Box>
  </Box>

  );
};

export default SignUp;
