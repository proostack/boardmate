import React from 'react'
import { Modal, StyleSheet } from 'react-native'
import { Box, Button, Center,  Text } from 'native-base';
import { Formik } from 'formik';
import * as Yup from "yup"
import { useMutation } from '@apollo/client';
import { FUND_WALLET } from '../../services/posts/FundWallet';
import InputField from '../InputField';

interface IModal{
  showFundWallet:boolean;
  closeFundWalletModal:()=>void;
  handleFundWallet:(amount:number)=>void
}

const DepositModal = ({showFundWallet,closeFundWalletModal,handleFundWallet}:IModal):JSX.Element => {
  const validationSchema = Yup.object({
    amount: Yup.number().required("Input an amount")
  })

  return (
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
          </Modal>  )
}

export default DepositModal

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