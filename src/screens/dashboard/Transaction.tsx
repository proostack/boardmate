import { Formik } from 'formik'
import { Box, Button, Center, HStack, Text } from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'
import InputField from '../../components/InputField'
import UserInfo from '../../components/profileMenu/UserInfo'
import { RootState } from '../../store/store'
import * as yup from "yup";
import GetCoinBalance from '../../services/queries/GetCoinBalance'
import { ApolloError } from '@apollo/client'

const Transaction = (): JSX.Element => {
  const { defaultUsers } = useSelector((state: RootState) => state.user)
  const profileDetails: string[] = [
    "Joined Apr 15, 2022",
    "Rating; 35"
  ]
  const transferSchema = yup.object({
    username: yup.string()
      .required("This field is required"),
    amount: yup.number()
      .required("This is a required field")
      .min(1, 'You can only tranfer between 1 to 10 BM coins')
      .max(10, 'You can transfer only up to 10 BM coin ')

  })

  const { data, error, loading } = GetCoinBalance()

  const [coinBalance, setCoinBalance] = React.useState<number | string>()

  React.useEffect(()=>{
    const getCoinBalance = () => {
      try {
        if (!loading && error) throw 'balance unavailable'
        setCoinBalance(data.coinBalance.balance)
      }
      catch (e) {
        if(typeof e === 'string')
        setCoinBalance(e)
      }
    }
  getCoinBalance()
  },[data])

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

      <Center
        h="86px"
        bgColor="#34364C"
        my="30px"
      >

        <Text fontFamily="ReadexProBold"
          color="white"
        >
          Boardmate Coins
        </Text>

        <Text
          mt="20px"
          fontFamily="ReadexProBold"
          color="white"
        >
          {coinBalance}
        </Text>

      </Center>


      <Formik initialValues={{ username: '', amount: "" }}
        validationSchema={transferSchema}
        onSubmit={({ username, amount }) => {
          // fireMutation({ variables: { username, amount } })
          console.log(username, amount)
        }}>
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <>
            <Box w="90%"
              mb="30px"
              mx="auto"
            >
              <InputField
                labelColor='white'
                label='Username'
                input={values.username}
                getInput={handleChange('username')}
              />
              <Text color={"red.500"}>{errors.username}</Text>

            </Box>

            <Box w="90%"
              mx="auto"
              mb="46px"
            >

              <InputField keysType='number'
                labelColor='white'
                placeholder=' '
                label='Amount'
                input={values.amount}
                getInput={handleChange('amount')}
              />
              <Text color={"red.500"}>{touched.amount && errors.amount}</Text>

            </Box>

            <Button w="90%"
              mx={'auto'}
              h="62px"
              bgColor="accent_bg.50"
              onPress={() => handleSubmit()}
            >
              <Text fontFamily={"ReadexProBold"}
                color="white"
              >
                Tranfer
              </Text>
            </Button>
          </>
        )}
      </Formik>

    </Box>
  )
}

export default Transaction