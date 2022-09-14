import React, { useEffect, useState } from 'react'
import { Box, HStack, Text, StatusBar, KeyboardAvoidingView, Spinner } from "native-base";
import UserInfo from '../../components/profileMenu/UserInfo';
import InputField from '../../components/profileMenu/InputField';
import Modal from '../../components/profileMenu/Modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShowUserProfile from '../../components/profileMenu/ShowUserProfile';
// import { TranslationLanguageCodeMap } from 'react-native-country-picker-modal';
import useProfile from '../../hooks/useProfile';
const Profile = (): JSX.Element => {
  const profileDetails: string[] = [
    "Joined Apr 15, 2022",
    "BM Coin available; 7000",
    "Rating; 35"
  ]
  const {
    updateProfile, called, error, loading,
    userName, setUserName,
    country, setCountry,
    data, defaultUsers,
    email, setEmail,
    fullName, setFullName,
    profModal, setProfModal,
    phoneNumber, setPhoneNumber,
    pwd, setPwd,
    oldPwd, setOldPwd,
    confirmPwd, setConfirmPwd,
    pwdModal, setPwdModal,
    userDetails, setUserDetails,
   user, userData, inputForms, 
   changePassword, editedPwd, clearMsg, 
   pwdUpdateStat,showNewPwd,showOldPwd,showConfirmPwd,
   setShowOldPwd,setShowNewPwd,setShowConfirmPwd
  } = useProfile()



  // show or hide password
 
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

    if (editedPwd.called && !editedPwd.loading) {
      clearMsg()
    }
    // if(editedPwd.called && !editedPwd.loading && editedPwd.error){
    //   console.log(editedPwd.error)
    // }
  }, [loading, called, user.loading, profModal,editedPwd.loading])







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
  const submitChangepwd = () => {
    changePassword({
      variables: {
        oldPwd,
        pwd,
        confirmPwd
      }
    })
  }
  // get country code and country
  // const getCountryCode = (countryCode: string) => {
  //   console.log(countryCode)
  // }
  // const getCountry = (country: string | TranslationLanguageCodeMap) => {
  //   console.log(country)
  // }

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
              setVisible={setProfModal}
              pwdError={editedPwd.error}
              pwdSuccess={editedPwd.data}
              pwdUpdateStat={pwdUpdateStat}
              pwdLoader={editedPwd.loading}
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

              <Box>
                {/* <SelectCountry 
                  getCountry={getCountry} 
                  getCountryCode={getCountryCode}
                  bgColor="green"
                  /> */}
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
            confirm={submitChangepwd}
          >
            <Box w="100%" >
              <Box mb="15px">
                <InputField input={oldPwd}
                  label="Old Password"
                  setInput={setOldPwd}
                  visiblity={showOldPwd}
                  setVisibility={()=>setShowOldPwd(!showOldPwd)}
                />
              </Box>

              <Box mb="15px">
                <InputField input={pwd}
                  label="New Password"
                  visiblity={showNewPwd}
                  setVisibility={()=>setShowNewPwd(!showNewPwd)}
                  setInput={setPwd}
                />
              </Box>
              <Box mb="15px">
                <InputField input={confirmPwd}
                  label="Confirm New Password"
                  visiblity={showConfirmPwd}
                  setVisibility={()=>setShowConfirmPwd(!showConfirmPwd)}
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