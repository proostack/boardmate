import { Box, Center, Text } from 'native-base'
import React from 'react'
import Button from '../../components/Buttons/Button'
import SelectCountry from '../../components/countryPicker/SelectCountry'
import FormHeader from '../../components/Headers/FormHeader'
import { AuthNavigationProps } from '../../types/routes'
const Country = ({ navigation }: AuthNavigationProps<"Country">): JSX.Element => {
  return (
    <Center>
      <Box maxW={375} w="90%">
        <Text mt={71} mb={35} fontSize={15} color="#393939" onPress={() => navigation.navigate("Username")} textAlign={"right"}>skip</Text>

        <FormHeader header='Sign Up' text="Hey! Before you begin playing let’s help you set up your account." />
        
        <Center flexDir={"row"} maxW={375} mx="auto">
          <Box mt={50}>
            <SelectCountry />
          </Box>
        </Center>

        <Center flexDir={"row"} mt={50} maxW={375} mx="auto">
          <Button text='Next' callback={() => navigation.navigate("Username")} />
        </Center>
      </Box>
    </Center>
  )
}

export default Country