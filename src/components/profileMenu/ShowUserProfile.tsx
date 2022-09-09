import { Box, Button, Text } from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import InputField from './InputField';
import { StyleSheet } from 'react-native';
type IUserProps = {
  inputForms: { label: string, input: string }[] | null;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPwdModal: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibility: () => void;
  show: boolean
}
const ShowUserProfile = ({
  inputForms,
  setVisible,
  setVisibility,
  setPwdModal,
  show
}: IUserProps): JSX.Element => {
  return (
    <Box mt={"50px"}>
      <Feather onPress={() => setVisible(true)}
        name="edit" style={styles.edit}
        size={19}
        color="#794DE3"
      />
      {inputForms?.map((item, index) => (
        <Box key={index} mb={item.label === "Password" ? 0 : 30}>
          <InputField {...item}
            setVisibility={setVisibility}
            editable={false}
            visiblity={show}
          />
          {item.label === "Password" && (
            <Button onPress={() => setPwdModal(true)} variant={"unstyled"} alignSelf="flex-end">
              <Text color="accent_bg.50">
                Change Password
              </Text>
            </Button>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default ShowUserProfile

const styles = StyleSheet.create({
  edit: { alignSelf: "flex-end" }
})