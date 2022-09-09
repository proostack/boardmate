import React, { useState, useEffect } from 'react'
import { Box, HStack, Text, StatusBar, KeyboardAvoidingView, Spinner } from "native-base";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import UserInfo from '../../components/profileMenu/UserInfo';
import InputField from '../../components/profileMenu/InputField';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../../services/posts/UpdateProfile';
import Modal from '../../components/profileMenu/Modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetUser from '../../services/queries/GetUser';
import ShowUserProfile from '../../components/profileMenu/ShowUserProfile';
const Profile = (): JSX.Element => {
  const profileDetails: string[] = [
    "Joined Apr 15, 2022",
    "BM Coin available; 7000",
    "Rating; 35"
  ]
  const [updateProfile, { data, called, loading, error }] = useMutation(UPDATE_PROFILE)
  const user = GetUser()
  const userData = user.data?.currentUser
  const [userDetails, setUserDetails] = useState(userData)
  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const [show, setShow] = useState<boolean>(true)
  const [userName, setUserName] = useState<string>("")
  const [fullName, setFullName] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [pwd, setPwd] = useState<string>("")
  const [confirmPwd, setConfirmPwd] = useState<string>("")
  const [profModal, setProfModal] = useState<boolean>(false)
  const [pwdModal, setPwdModal] = useState<boolean>(false)

  // profile details
  const inputForms = [
    {
      label: "Full Name",
      input: userDetails?.fullName
    },
    {
      label: "Username",
      input: userDetails?.userName
    },
    {
      label: "Email Address",
      input: userDetails?.email
    },
    {
      label: "Password",
      input: userDetails?.password
    },
    {
      label: "Country",
      input: userDetails?.country
    },

  ]

  // show or hide password
  const setVisibility = () => {
    setShow(!show)
  }

  useEffect(() => {
    // Getting the updated profile
    if (!loading && called) {
      if (error) {
        console.log(error)
      } else {
        const updatedInfos = data?.UpdateUserInput
        setUserDetails(updatedInfos)
      }
    }

    // first loaded profile
    if (!user.loading && !called) {
      setUserDetails(userData)
      setFullName(userDetails?.fullName)
      setPhoneNumber(userDetails?.phoneNumber)
      setUserName(userDetails?.userName)
      setCountry(userDetails?.country)
      setEmail(userDetails?.email)
    }
  }, [loading, called, user.loading, profModal])




  // Submitting request to update profile
  const submitProfileUpdate = () => {
    updateProfile({
      variables: {
        fullName,
        phoneNumber,
        userName,
        country,
        email
      }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} backgroundColor="black" />
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Box flex={1} bgColor={"#32313F"} px={23}>
          <HStack mt={"32px"} >
            <UserInfo profileDetails={profileDetails}
              image={defaultUsers[0].image}
              name={defaultUsers[0].name}
            />
          </HStack>

          {/* show loader or profile details */}
          {loading || user.loading ? <Spinner mt="30px" color={"white"} size={50} /> : (
            <ShowUserProfile
              inputForms={inputForms}
              setPwdModal={setPwdModal}
              setVisibility={setVisibility}
              show={show}
              setVisible={setProfModal}
            />
          )
          }
          {user.error && <Text textAlign={"center"} fontSize="3xl" mt="30px">{user.error.message}</Text>}
          {/* update profile modal */}
          <Modal
            confirm={submitProfileUpdate}
            visible={profModal}
            setVisible={setProfModal}
            modalColor={"darkTheme.50"}
          >
            <Box w="100%" >
              <Box mb="15px">
                <InputField
                  input={fullName}
                  label="Full Name"
                  setInput={setFullName}
                />
              </Box>
              <Box mb="15px">
                <InputField
                  input={userName}
                  label="Username"
                  setInput={setUserName}
                />
              </Box>
              <Box mb="15px">
                <InputField
                  input={email}
                  label="Email"
                  setInput={setEmail}
                />
              </Box>
              <Box mb="15px">
                <InputField
                  input={country}
                  label="Country"
                  setInput={setCountry}
                />
              </Box>
              <InputField
                input={phoneNumber}
                label="Phone Number"
                setInput={setPhoneNumber}
              />
            </Box>
          </Modal>

          {/* change password modal */}
          <Modal
            visible={pwdModal}
            setVisible={setPwdModal}
            modalColor={"darkTheme.50"}
          >
            <Box w="100%" >
              <Box mb="15px">
                <InputField input={pwd}
                  label="New Password"
                  setInput={setConfirmPwd}
                />
              </Box>
              <Box mb="15px">
                <InputField input={confirmPwd}
                  label="Confirm New Password"
                  setInput={setConfirmPwd}
                />
              </Box>
            </Box>
          </Modal>
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
export default Profile