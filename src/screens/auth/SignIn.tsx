import React, { useState } from "react";
import { Box, Center, Spinner, Text } from "native-base";
import FormHeader from "../../components/Headers/FormHeader";
import InputField from "../../components/InputField";
import Button from "../../components/Buttons/Button";
import FaceBook_Google from "../../components/FaceBook_Google";
import { AuthNavigationProps } from "../../types/routes";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/user';
import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "../../services/auth/SignInUser";


const signinSchema = yup.object({
  email: yup.string().required("This field is required").email('Invalid email address'),
  password: yup.string().required("This is a required field").min(6)
})



const SignIn = ({ navigation }: AuthNavigationProps<"Login">): JSX.Element => {
  const dispatch = useDispatch()
  const [signInUser, { data, error, loading, called }] = useMutation(SIGNIN_USER)
  const [show, setShow] = useState<boolean>(true)
  const setVisibilty = () => {
    setShow(!show)
  }
  if (called && !loading) {
    if (error) {
      console.log(error.message)
    }
    else {
      // Setting user token
      dispatch(setToken(data.loginInput.token))
    }
  }

  return (
    <Box alignItems="center" w="100%" mt={71}>
      <Box maxW={375} w="90%">
        <Box mb={65}>
          <FormHeader text="Welcome back! Login to access your account 🤩" header="Login" />
        </Box>

        {/* Fields for email and password */}
        <Formik initialValues={{ email: "", password: "" }}
          validationSchema={signinSchema}
          onSubmit={({ email, password }) => {
            signInUser({ variables: { email, password } })
          }}>
          {
            ({ handleSubmit, handleChange, values, errors, touched }) => (
              <>
                <InputField input={values.email} getInput={handleChange('email')} label="Email" />
                <Text color={"red.500"} mb={15}>{touched.email && errors.email}</Text>
                <InputField input={values.password} getInput={handleChange('password')} label="Password" setVisibilty={setVisibilty} visibility={show} />
                <Text color={"red.500"}>{touched.password && errors.password}</Text>
                <Text textAlign="right" color="accent_bg.50" mt={30} mb={50} onPress={() => navigation.navigate("ChooseHow")}>Forgot password?</Text>

                {/* Login button */}
                <Center mb={30}>
                  <Button callback={handleSubmit}>
                    <>
                      {(called && loading) && <Spinner color={"white"} />}
                      {!loading && <Text
                        fontFamily="ReadexProBold"
                        fontSize={16}
                        color="white"
                      >
                        Login
                      </Text>}
                    </>
                  </Button>

                </Center>
              </>
            )
          }
        </Formik>

        {/* Google and facebook Login */}
        <FaceBook_Google />
      </Box>
    </Box>
  );
};

export default SignIn;



