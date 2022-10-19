import { Box, Center, Text } from 'native-base'
import React from 'react'
import { TranslationLanguageCodeMap } from 'react-native-country-picker-modal'
import Button from '../../components/Buttons/Button'
import SelectCountry from '../../components/countryPicker/SelectCountry'
import FormHeader from '../../components/Headers/FormHeader'
import { AuthNavigationProps } from '../../types/routes'
const Country = ({ navigation, route }: AuthNavigationProps<"Country">): JSX.Element => {
  const email = route.params?.email
  const password = route.params?.password
  const [country, setCountry] = React.useState<string | TranslationLanguageCodeMap>("")
  const [phoneNumber, setPhoneNumber] = React.useState<string>("")
  const [countryCode, setCountryCode] = React.useState<string>("")

  const getCountry = () => (country: string | TranslationLanguageCodeMap) => {
    setCountry(country)
  }

  const getCountryCode = (code: string) => {
    setCountryCode(code)
  }

  const getPhoneNumber = (phoneNumber: string) => {
    setPhoneNumber(`${phoneNumber}`)
  }

  const navigateToCountry = () => {
    navigation.navigate("Username", {
      email,
      password,
      country,
      phoneNumber: `${countryCode}${phoneNumber}`
    })
  }
  return (
    <Center>
      <Box maxW={375} w="90%">
        <Text mt={71} mb={35}
          fontSize={15} color="#393939"
          onPress={navigateToCountry}
          textAlign={"right"}>
          skip
        </Text>

        <FormHeader header='Sign Up'
          text="Hey! Before you begin playing let’s help you set up your account."
        />

        <Center flexDir={"row"}
          maxW={375}
          mx="auto"
        >

          <Box mt={50}>
            <SelectCountry getCountry={getCountry}
              getPhoneNumber={getPhoneNumber}
              phoneNumber={phoneNumber}
              getCountryCode={getCountryCode}
            />
          </Box>
        </Center>

        <Center flexDir={"row"} mt={50}
          maxW={375} mx="auto">
          <Button text='Next'
            callback={navigateToCountry}
          />
        </Center>
      </Box>
    </Center>
  )
}

export default Country