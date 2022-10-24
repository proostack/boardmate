import { useMutation } from '@apollo/client'
import React, { useState,useCallback } from 'react'
import { useSelector } from 'react-redux'
import { CHANGEPWD_REQ } from '../services/posts/ChangePwd'
import { UPDATE_PROFILE } from '../services/posts/UpdateProfile'
import GetUser from '../services/queries/GetUser'
import { RootState } from '../store/store'

const useProfile = () => {
  const [updateProfile, { data, called, loading, error }] = useMutation(UPDATE_PROFILE)
  const [changePassword,editedPwd] = useMutation(CHANGEPWD_REQ)
  const user = GetUser()
  const userData = user.data?.currentUser
  const [userDetails, setUserDetails] = useState(userData)
  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const [userName, setUserName] = useState<string>("")
  const [fullName, setFullName] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [oldPwd, setOldPwd] = useState<string>("")
  const [pwd, setPwd] = useState<string>("")
  const [confirmPwd, setConfirmPwd] = useState<string>("")
  const [profModal, setProfModal] = useState<boolean>(false)
  const [pwdModal, setPwdModal] = useState<boolean>(false)
  const [showOldPwd,setShowOldPwd]=useState(true)
  const [showNewPwd,setShowNewPwd]=useState(true)
  const [showConfirmPwd,setShowConfirmPwd]=useState(true)
  const [delAcctModal,setDelAcctModal]=useState<boolean>(false)
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
      label: "Country",
      input: userDetails?.country
    },

  ]
  const [pwdUpdateStat, setPwdUpdateStat] = useState(false)

  const clearMsg =useCallback(() => {
      setPwdUpdateStat(true)
      if (editedPwd.error || editedPwd.data) {
        setTimeout(() => {
          setPwdUpdateStat(false)
        }, 4000)
      }
    },[editedPwd.loading,editedPwd.data])

  return ({
    userDetails, setUserDetails,
    defaultUsers,userName,
    setUserName, fullName,
    setFullName, country,
    setCountry, email,
    setEmail, phoneNumber,
    setPhoneNumber, pwd,
    setPwd, confirmPwd,
    setConfirmPwd, profModal,
    setProfModal, pwdModal,
    setPwdModal, updateProfile,
    data, error,
    loading, called,
    user, userData, inputForms,
    changePassword,editedPwd,
    oldPwd,setOldPwd,clearMsg,
    pwdUpdateStat,showOldPwd,showNewPwd,
    showConfirmPwd,setShowOldPwd,setShowNewPwd,setShowConfirmPwd,
    delAcctModal,setDelAcctModal
  })
}

export default useProfile