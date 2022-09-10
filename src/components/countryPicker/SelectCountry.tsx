import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Input, InputGroup, InputLeftAddon,  Box, Text, Image } from "native-base"
import CountryPicker, { TranslationLanguageCodeMap } from 'react-native-country-picker-modal'
import { Country, region } from './types'
import { Entypo } from '@expo/vector-icons';

import { setUserDetails } from '../../store/user'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { CountryCodeList } from './types'

interface ICountryProps{
getCountry:(country:string| TranslationLanguageCodeMap)=>void
getCountryCode:(callingCode:string)=>void
bgColor?:string
}

export default function SelectCountry({getCountry,getCountryCode,bgColor}:ICountryProps):JSX.Element {
  const [countryCode, setCountryCode] = useState<any>('FR')
  const [callingCode, setCallingCode] = useState<string[]>()
  const [region, setRegion] = useState<region>()
  const [countryDet, setCountryDet] = useState<Country|null>(null)
  const withCountryNameButton = (true)
  const withFlag = (true)
  const withEmoji = (false)
  const withFilter = (true)
  const withAlphaFilter = (true)
  const withCallingCode = (true)
  const withFlagButton = (true)
  const dispatch=useDispatch()
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountryDet(country)
    setRegion(country.region)
    setCallingCode(country.callingCode)
    dispatch(setUserDetails(country.callingCode))
    getCountry(country.name)
    getCountryCode(country.callingCode[0])
  }
  const onClose=()=>{
    console.log("closed")
  }
  return (
    <>
<Text fontFamily="ReadexProRegular" mb={13}>Country</Text>
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
          withFlagButton,
          onClose,
          region,
          renderFlagButton: ({onOpen,containerButtonStyle}) => (
          
              <TouchableOpacity onPress={() =>onOpen && onOpen()} style={{width:"100%"}}>
                <Box flexDirection="row" w="100%" style={[styles.containerButtonStyle,{backgroundColor: bgColor?bgColor:"#F9F9FA"}]}>

                  <Box flexDirection="row" borderRightWidth={1} borderColor="#ECECEC">
                  <Image style={{ width: 30, height: 24}} source={{ uri: countryDet?.flag }} alt="flag" />
                  <Entypo name="chevron-small-down" style={{marginRight:10,marginLeft:10 }} size={24} color="#393939C2" />
                  </Box>
                  
                  <Text style={{ fontSize: 18, color: "#393939C2", marginLeft: 16 }} >{countryDet?.name ? countryDet.name : "select a country"}</Text>
                </Box>
              </TouchableOpacity>
          ),

        }}
        visible
      />

     <Text mt={30} mb={13}  fontSize={16} fontFamily="ReadexProRegular">Phone number</Text>
      <InputGroup  w={{
        base: "100%",
        md: "285"
      }}  >
        <InputLeftAddon
         height={66} 
        //  variant="unstyled"  
         borderWidth={0}
          w="40%" >


         <Text borderRightWidth={1} 
         borderColor="#ECECEC" 
         color="#393939C2" 
         fontSize={16}
          paddingRight={10}>
           {`+${callingCode}`}
           </Text>
           
            </InputLeftAddon>
        <Input borderRadius={12} keyboardType='number-pad' variant="unstyled" w={{
          base: "60%",
          md: "300"
        }} bgColor="#F9F9FA"  placeholder="Phone no." fontSize={16}/>

      </InputGroup>
    </>
  )
}


const styles=StyleSheet.create({
  containerButtonStyle: {
    height: 66,
    fontSize: 16,
    alignItems: "center",
    paddingLeft: 10,
  },
  
})