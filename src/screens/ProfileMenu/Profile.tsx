import React, { useState } from 'react'
import { Box, HStack, Text } from "native-base";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import UserInfo from '../../components/profileMenu/UserInfo';
import InputField from '../../components/profileMenu/InputField';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../../services/posts/UpdateProfile';
import Button from '../../components/Buttons/Button';



const Profile = (): JSX.Element => {
  const profileDetails: string[] = [
    "Joined Apr 15, 2022",
    "BM Coin available; 7000",
    "Rating; 35"
  ]

  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const [show, setShow] = useState<boolean>(true)

  const [editable, setEditable] = useState<boolean>(false)
  const [username, setUserName] = useState<string>("Margin1")
  const [updateProfile, { data, called, loading, error }] = useMutation(UPDATE_PROFILE)

  const inputForms = [
    {
      label: "Full Name",
      input: "Abdurrazzaq Abdulmuhsin Bidemi"
    },
    {
      label: "Username",
      input: username
    },
    {
      label: "Email Address",
      input: "abdurrazzaqabdulmuhsin7@gmail.com"
    },
    {
      label: "Password",
      input: "1234567890"
    },
    {
      label: "Country",
      input: "Nigeria"
    },

  ]

  const setVisibility = () => {
    setShow(!show)
  }

  const handleEditable = () => {
    setEditable(true)
  }

  if (!loading && called) {
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
  }


  return (
    <Box flex={1} bgColor={"#32313F"} px={23}>
      <HStack mt={"32px"} >
        <UserInfo profileDetails={profileDetails}
          image={defaultUsers[0].image}
          name={defaultUsers[0].name}
        />
      </HStack>
      <Button callback={() => {
        updateProfile()
      }}>
        <Text color="white" fontSize={"2xl"}>
          Update Profile
        </Text>
      </Button>
      <Box mt={"50px"}>
        {inputForms.map((item, index) => (
          <Box key={index} mb={30}>
            <InputField {...item}
              setUserName={setUserName}
              setEditable={handleEditable}
              setVisibility={setVisibility}
              editable={editable}
              visiblity={show}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
export default Profile