import React, { useEffect } from 'react'
import { Box, Button, Center, HStack, Text } from "native-base";
import { Modal, StyleSheet } from 'react-native';
import { TransNavType } from '../../types/generalTypes';
import UserInfo from '../../components/profileMenu/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useMutation } from '@apollo/client';
import { FUND_WALLET } from '../../services/posts/FundWallet';
import InputField from '../../components/InputField';
import { Formik } from 'formik';
import * as Yup from "yup"
import * as Linking from 'expo-linking';


const Wallet = ({ navigation }: TransNavType): JSX.Element => {
  const validationSchema = Yup.object({
    amount: Yup.number().required("Input an amount")
  })
  // const getResponse = async () => {
  //   const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/wallet_top_up`)
  //   const data = await response.json()
  // }

  // getResponse()




  const [fundWallet, { data, error, loading }] = useMutation(FUND_WALLET)
  const profileDetails: string[] = [
    "Joined Apr 15, 2022",
    "Rating; 35"
  ]
  const [visible, setVisible] = React.useState(false)
  const [showFundWallet, setShowFundWallet] = React.useState(false)
  // closing modal
  const closeModal = () => {
    setVisible(false)
  }

  const closeFundWalletModal = () => {
    setShowFundWallet(false)
  }
  // open modal
  const openModal = () => {
    setVisible(true)
  }

  const openFundWalletModal = () => {
    setShowFundWallet(true)
  }

  const navToTransfer = () => {
    setVisible(false)
    navigation.navigate('Transaction')
  }

  const navToConversion = () => {
    setVisible(false)
    navigation.navigate('Conversion')
  }

  const handleFundWallet = (amount: number) => {
    setShowFundWallet(false)
    fundWallet({
      variables: {
        amount
      }
    })
  }
  useEffect(() => {
    Linking.openURL(data?.FundWalletInput.topUpLink);
  }, [data])



  const { defaultUsers } = useSelector((state: RootState) => state.user)
  return (
    <Box flex={1} bgColor="darkTheme.50">
      <Box w='90%' mx='auto'>
        <HStack mt={"32px"} >
          <UserInfo profileDetails={profileDetails}
            image={defaultUsers[0].image}
            name={defaultUsers[0].name}
          />
        </HStack>

        <HStack justifyContent={'space-between'}
          mt="50px"
        >
          <Button w={"45%"}
            h="62px"
            bgColor="accent_bg.50"
            onPress={openFundWalletModal}
          >
            <Text fontFamily={"ReadexProBold"}
              color="white"
            >
              Deposit
            </Text>
          </Button>

          <Button w={"45%"}
            h="62px"
            variant={"unstyled"}
            borderWidth="2px"
            borderColor={"accent_bg.50"}
          >
            <Text color="accent_bg.50"
              fontFamily={"ReadexProBold"}
            >
              Withdraw
            </Text>
          </Button>
        </HStack>
      </Box>

      <Center h="86px"
        bgColor="#34364C"
        my="30px"
      >
        <Text fontFamily="ReadexProBold"
          color="white"
        >
          Cash Balance
        </Text>

        <Text mt="20px"
          fontFamily="ReadexProBold"
          color="white"
        >
          NGN 4000
        </Text>
      </Center>

      <Center h="86px"
        bgColor="#34364C"
      >
        <Text fontFamily="ReadexProBold"
          color="white"
        >
          BoardMate Coins;
        </Text>
        <Text mt="20px"
          fontFamily="ReadexProBold"
          color="white"
        >
          40000
        </Text>
      </Center>

      <Center w="90%"
        mt="30px"
        mx="auto"
      >
        <Text color={"white"}
          fontFamily="ReadexProBold"
          fontSize={"12px"}
        >
          Do you Transfer Boardmate Coins or Convert to cash?
        </Text>
        <Button onPress={openModal}
          variant={'unstyled'}
          mt="10px"
        >
          <Text fontFamily="ReadexProBold"
            fontSize={"16px"}
            color="accent_bg.50"
          >
            Click Here
          </Text>
        </Button>
      </Center>

      <Modal animationType='slide'
        visible={visible}
        onRequestClose={closeModal}
        transparent={true}>
        <Box style={[styles.centeredView, {
          backgroundColor: "rgba(0, 0, 0, 0.32)"
        }]}>
          <Center w="90%"
            py="50px"
            bgColor={"darkTheme.50"}
          >
            <Text color="white"
              fontSize={"16px"}
              fontFamily={"ReadexProBold"}
            >
              Select your choice
            </Text>
            <Button onPress={navToTransfer}
              h="60px"
              mt="50px"
              w="90%"
              bgColor={"accent_bg.50"}
            >
              <Text
                fontSize={"16px"}
                fontFamily={"ReadexProBold"}
                color="white"
              >
                Transfer Coins
              </Text>
            </Button>

            <Button onPress={navToConversion}
              h="60px" mt="50px"
              w="90%"
              bgColor={"accent_bg.50"}
            >
              <Text fontSize={"16px"}
                fontFamily={"ReadexProBold"}
                color="white"
              >
                Convert Coins
              </Text>
            </Button>
          </Center>
        </Box>
      </Modal>

      <Modal animationType='slide'
        visible={showFundWallet}
        onRequestClose={closeFundWalletModal}
        transparent={true}>
        <Box style={[styles.centeredView, {
          backgroundColor: "rgba(0, 0, 0, 0.32)"
        }]}>
          <Center w="90%"
            py="50px"
            bgColor={"darkTheme.50"}
          >
            <Formik initialValues={{ amount: '' }}
              onSubmit={({ amount }) => handleFundWallet(Number(amount))}
              validationSchema={validationSchema}
            >
              {({ errors, values, handleSubmit, touched, handleChange }: any) => (
                <Box w="90%">

                  <InputField label='Amount'
                    labelColor='white'
                    input={values.amount}
                    getInput={handleChange('amount')}
                    keysType={"number"}
                  />
                  <Text color="red.500">
                    {errors.amount}
                  </Text>

                  <Button onPress={handleSubmit}
                    h="60px" mt="50px"
                    bgColor={"accent_bg.50"}
                  >
                    <Text fontSize={"16px"}
                      fontFamily={"ReadexProBold"}
                      color="white"
                    >
                      Fund wallet
                    </Text>
                  </Button>
                </Box>
              )}

            </Formik>

          </Center>
        </Box>
      </Modal>
    </Box>
  )
}

export default Wallet
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});