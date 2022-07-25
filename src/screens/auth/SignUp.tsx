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
  email: yup.string().required("Input Email Address").required("This field is required").email('Invalid email address'),
    password: yup.string().required("Input password").min(6),
    confirmPassword: yup.string().equals([yup.ref('password'),null], "Passwords must match").required("Input Confirmed Password")
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
    <Box maxW={375} w="90%">
      <Box mb={65}>
        <FormHeader text="Hey! Before you begin playing let’s help you set up your account." header="Sign up" />
    
      </Box>

      <Formik initialValues={{email:"",password:"",confirmPassword:""}} validationSchema={signupSchema} onSubmit={()=>{
handleNavigation()
      }}>
{({handleSubmit,handleChange,values,errors,touched})=>(
  <>

        <InputField input={values.email} getInput={handleChange('email')} label="Email" />
        <Text mb={15} color="red.500">{touched.email&&errors.email}</Text>
     
     
      <InputField input={values.password} getInput={handleChange('password')} label="Password" setVisibilty={setVisibilty} visibility={show} />
      <Text mb={15} color="red.500">{touched.password&&errors.password}</Text>

     

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
