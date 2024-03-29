import { useMutation } from '@apollo/client'
import { Box, Center, Spinner, Text } from 'native-base'
import React, { useCallback, useState } from 'react'
import Button from '../../components/Buttons/Button'
import FormHeader from '../../components/Headers/FormHeader'
import InputField from '../../components/InputField'
import { FORGOTPWD_REQ } from '../../services/posts/ForgotPwdReq'
import { AuthNavigationProps } from '../../types/routes'
import * as yup from "yup";
import { Formik } from 'formik'

const Email = ({ navigation }: AuthNavigationProps<"Email">): JSX.Element => {
  const [msg, setMsg] = useState<boolean>(true)

  // gql Mutation to change password
  const [forgotPwdReq, { data, error, loading, called }] = useMutation(FORGOTPWD_REQ)

  const emailSchema = yup.object({
    // validation schema for email
    email: yup.string()
      .required("This field is required")
      .email('Invalid email address')

  })

  const clearMessage = () => {
    // clearing modal after 5 seconds
    setMsg(true)
    setTimeout(() => {
      setMsg(false)
    }, 5000)
  }

  const emailResponse = useCallback(() => {
    // throw error or return message sent from server 
    if (called && !loading) {
        clearMessage()
        // navigation.navigate("ResetPin")
    }
  }, [data])

  return (
    <Box alignItems="center" >
      <Box mt={71} mx="auto" w="90%">
        <FormHeader header='Forgot Your Password'
          text="Enter your email address to recover 😪"
        />
        <Box mt={50}>
          <Formik initialValues={{ email: "", password: "" }}
            validationSchema={emailSchema}
            onSubmit={({ email }) => {
              // submitting request to change password
              forgotPwdReq({
                variables: {
                  email
                }
              })
              emailResponse()
            }}>
            {
              ({ handleSubmit, handleChange, values, errors }) => (
                <>
                  <InputField label='Email'
                    input={values.email}
                    getInput={handleChange('email')}
                  />
                  <Text color={"red.500"}>
                    {errors.email}
                  </Text>
                  <Center flexDir={"row"} mt={50}>
                    <Button
                      callback={handleSubmit}
                    >
                      {/* Creating a loader on loading response */}
                      <>
                        {(called && loading) && <Spinner color={"white"} />}
                        {!loading && <Text
                          fontFamily="ReadexProBold"
                          fontSize={16}
                          color="white"
                        >
                          Reset Password
                        </Text>}
                      </>
                    </Button>
                  </Center>
                </>
              )
            }
          </Formik>
        </Box>

        <Text color="#2D2D2D99" textAlign={"center"} mt="30">
          Remember your Password? <Text color="accent_bg.50" bold
            onPress={() => navigation.navigate("Login")}>
            Sign in
          </Text>
        </Text>
        {(data && msg) && (
          <Box mt="20px" bg={"green.500"} rounded="5px" p="5px">
            <Text color="white">
              {data.forgetPassword.Message}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Email