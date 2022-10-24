import React, { useEffect } from 'react'
import { Box, Button, Center, HStack, ScrollView, Spinner, Text } from "native-base";
import { SafeAreaView } from 'react-native';
import { TransNavType } from '../../types/generalTypes';
import UserInfo from '../../components/profileMenu/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useMutation } from '@apollo/client';
import { FUND_WALLET } from '../../services/posts/FundWallet';
import * as Linking from 'expo-linking';
import GetCashBalance from '../../services/queries/GetCashBalance';
import GetCoinBalance from '../../services/queries/GetCoinBalance';
import { RefreshControl } from 'react-native';
import SelectChoiceModal from '../../components/wallet/SelectChoiceModal';
import DepositModal from '../../components/wallet/DepositModal';
const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const Wallet = ({ navigation }: TransNavType): JSX.Element => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCashBalance.refetch()
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getCashBalance = GetCashBalance()
  const getCoinBalance = GetCoinBalance()
  console.log(getCashBalance.data)


  const [fundWallet, { data, error, loading }] = useMutation(FUND_WALLET)
  const profileDetails: string[] = [
    "Joined Apr 15, 2022",
    "Rating; 35"
  ]
  const [choice, setChoice] = React.useState(false)
  const [showFundWallet, setShowFundWallet] = React.useState(false)
  // closing modal
  const closeChoiceModal = () => {
    setChoice(false)
  }

  const closeFundWalletModal = () => {
    setShowFundWallet(false)
  }
  // open modal
  const openChoiceModal = () => {
    setChoice(true)
  }

  const openFundWalletModal = () => {
    setShowFundWallet(true)
  }

  const navToTransfer = () => {
    setChoice(false)
    navigation.navigate('Transaction')
  }

  const navToConversion = () => {
    setChoice(false)
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
  let link = null
  const [cashBalance, setCashBalance] = React.useState<number | string>()
  const [coinBalance, setCoinBalance] = React.useState<number | string>()
  useEffect(() => {
    const setBalance = () => {
      try {
        if (!getCoinBalance.loading && !getCashBalance.loading && error) throw "Balance not available"
        setCoinBalance(getCoinBalance.data.coinBalance.balance)
        setCashBalance(getCashBalance.data.walletBalance.balance)
      }
      catch (e) {
        if (typeof e === 'string')
          setCoinBalance(e)
      }
    }
    setBalance()
    console.log("loading coin")
    link = data?.FundWalletInput.topUpLink
    Linking.openURL(link);

  }, [data, getCoinBalance.data, getCashBalance.data])

  const { defaultUsers } = useSelector((state: RootState) => state.user)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }} refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
        <Box flex={1} bgColor="darkTheme.50">
          <Box w='90%' mx='auto'>
            <HStack mt={"32px"}>
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
                  {loading ? <Spinner /> : 'Deposit'}
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
              NGN {cashBalance}
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
              {coinBalance}
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
            <Button onPress={openChoiceModal}
              variant={'unstyled'}
              mt="10px"
            >
              <Text fontFamily="ReadexProBold"
                fontSize={"16px"}
                color="accent_bg.50"
              >
                Click Here
              </Text>
              <Text color={"red.500"}>{error}</Text>
            </Button>
          </Center>

          <SelectChoiceModal visible={choice}
            closeModal={closeChoiceModal}
            navToTransfer={navToTransfer}
            navToConversion={navToConversion}
          />

          <DepositModal handleFundWallet={handleFundWallet}
            showFundWallet={showFundWallet}
            closeFundWalletModal={closeFundWalletModal}
          />

        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Wallet
