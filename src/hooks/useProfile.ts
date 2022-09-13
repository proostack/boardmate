import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { UPDATE_PROFILE } from '../services/posts/UpdateProfile'
import GetUser from '../services/queries/GetUser'
import { RootState } from '../store/store'

const useProfile = () => {
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

  return ({
    userDetails, setUserDetails,
    defaultUsers, show,
    setShow, userName,
    setUserName,fullName,
    setFullName,country,
    setCountry,email,
    setEmail, phoneNumber,
    setPhoneNumber, pwd,
    setPwd,confirmPwd,
    setConfirmPwd, profModal,
    setProfModal, pwdModal,
    setPwdModal, updateProfile,
    data, error,
    loading,called,
    user,userData,inputForms

  })
}

export default useProfile