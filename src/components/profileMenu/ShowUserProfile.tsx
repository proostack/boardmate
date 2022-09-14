import { Box, Button, Spinner, Text } from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import InputField from './InputField';
import { StyleSheet } from 'react-native';
import { ApolloError } from '@apollo/client';
type IUserProps = {
  inputForms: { label: string, input: string }[] | null;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPwdModal: React.Dispatch<React.SetStateAction<boolean>>;
  pwdError?: ApolloError,
  pwdSuccess?: {
    changePasswordInput: {
      Message: string
    }
  },
  pwdUpdateStat: boolean,
  pwdLoader: boolean
}
const ShowUserProfile = ({
  inputForms,
  setVisible,
  setPwdModal,
  pwdError,
  pwdSuccess,
  pwdUpdateStat,
  pwdLoader
}: IUserProps): JSX.Element => {

  return (
    // edit button to show modal
    <Box mt={"50px"}>
      <Feather onPress={() => setVisible(true)}
        name="edit" style={styles.edit}
        size={19}
        color="#794DE3"
      />
      {/* user details fields */}
      {inputForms?.map((item, index) => (
        <Box key={index} mb={item.label === "Password" ? 0 : 30}>
          <InputField {...item}
            editable={false}
            visiblity={false}
          />
        </Box>
      ))}


      {/* change password button to show modal */}
      <Box mb={3}>
        {(pwdError && pwdUpdateStat) && <Text textAlign={"center"}
          color="red.500"
          fontFamily={"ReadexProBold"}
        >
          {pwdError.message}
        </Text>}
        {(pwdSuccess && pwdUpdateStat) && <Text textAlign={"center"}
          color="green.500" fontFamily={"ReadexProBold"}
        >
          {pwdSuccess.changePasswordInput.Message}
        </Text>
        }
      </Box>

      {/* {console.log(pwdSuccess?.Message)} */}
      {pwdLoader ? <Spinner color={"green"} size={30} /> : (
        <Button onPress={() => setPwdModal(true)}
          variant={"unstyled"}
          bgColor="accent_bg.50"
        >
          <Text color="white"
            textTransform={"uppercase"}
            fontFamily='ReadexProBold'
          >
            Change Password
          </Text>
        </Button>
      )
      }

    </Box>
  )
}

export default ShowUserProfile

const styles = StyleSheet.create({
  edit: { alignSelf: "flex-end" }
})