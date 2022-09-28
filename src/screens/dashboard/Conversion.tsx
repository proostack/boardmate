import { Box, Button, Center, HStack, Text } from 'native-base'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InputField from '../../components/InputField'
import UserInfo from '../../components/profileMenu/UserInfo'
import { RootState } from '../../store/store'
const Conversion = (): JSX.Element => {
  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const profileDetails: string[] = [
    "Joined Apr 15, 2022",
    "Rating; 35"
  ]

  const [coins, setCoins] = useState<string>("")
  const [cash, setCash] = useState<string>("")
  return (
    <Box flex={1} bgColor="darkTheme.50">

      <Box w='90%' mx='auto'>

        <HStack mt={"32px"} >
          <UserInfo profileDetails={profileDetails}
            image={defaultUsers[0].image}
            name={defaultUsers[0].name}
          />
        </HStack>

      </Box>

      <Center h="86px"
        bgColor="#34364C"
        my="30px"
      >
        <Text fontFamily="ReadexProBold"
          color="white"
        >
          Boardmate Coins;
        </Text>

        <Text mt="20px"
          fontFamily="ReadexProBold"
          color="white"
        >
          4000
        </Text>
      </Center>

      <Box w="90%"
        mb="30px"
        mx="auto"
      >

        <InputField labelColor='white'
          label='BoardMate Coins'
          placeholder=' '
          input={coins}
          getInput={setCoins}
        />

      </Box>

      <Box w="90%"
        mx="auto"
        mb="46px"
      >

        <InputField keysType='number'
          labelColor='white'
          placeholder=' '
          label='Cash Equivalent'
          input={cash}
          getInput={setCash}
        />

      </Box>

      <Button w="90%"
        mx={'auto'}
        h="62px"
        bgColor="accent_bg.50"
      >
        <Text fontFamily={"ReadexProBold"}
          color="white"
        >
          Convert
        </Text>
      </Button>

    </Box>
    )
}

export default Conversion