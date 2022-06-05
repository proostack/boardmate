import { Box } from 'native-base'
import React, { useState } from 'react'
import { View, Text, StyleSheet,TextInput, PixelRatio, Switch, Image} from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country} from './types'
import { Entypo } from '@expo/vector-icons';
export default function App() {
  const [countryCode, setCountryCode] = useState('FR')
  const [region,setRegion] = useState('')
  const [country, setCountry] = useState("")
  const withCountryNameButton = (true)
  const withFlag  = (true)
  const withEmoji = (false)
  const withFilter = (true)
  const withAlphaFilter  = (true)
  const withCallingCode = (true)
  const withFlagButton = (true)
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
    setRegion(country.region)
  }
  return (
    <>
  
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
          region,
          containerButtonStyle:{
            backgroundColor:"#F9F9FA",
            height:66,
            fontSize:16,
            alignItems:"center",
            paddingLeft:30,
            
          },
          renderFlagButton:(props)=>(
          <Box flexDirection="row"  style={props.containerButtonStyle} onPress={()=>props.onOpen()}>
      <Image style={{width:24,height:24,marginRight:16}} source={{uri:country.flag}}/>
      <Entypo name="chevron-small-down" style={{marginRight:26}} size={24} color="#393939C2"/>
      <Text  style={{fontSize:18,color:"#393939C2"}} >{country.name?country.name:"eee"}</Text>
      
          </Box>
          ),
          renderCountryButton:()=>(<Text></Text>),
      
        }}
        visible
      />
      {/* <Text style={styles.instructions}>Press on the flag to open modal</Text> */}
      {/* {country !== null && (
        <Text style={styles.data}>{JSON.stringify(country, null, 2)}</Text>
      )} */}
    </>
  )
}
