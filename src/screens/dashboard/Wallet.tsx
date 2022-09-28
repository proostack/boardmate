import React from 'react'
import { Box, Button, Center, HStack, Text } from "native-base";
import { Modal, StyleSheet } from 'react-native';
import { TransNavType } from '../../types/generalTypes';
import UserInfo from '../../components/profileMenu/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Wallet = ({ navigation }: TransNavType): JSX.Element => {
  const profileDetails: string[] = [
    "Joined Apr 15, 2022",
    "Rating; 35"
  ]
  const [visible, setVisible] = React.useState(false)
  // closing modal
  const closeModal = () => {
    setVisible(false)
  }

  const openModal = () => {
    setVisible(true)
    console.log(visible)
  }

  const navToTransfer = () => {
    setVisible(false)
    navigation.navigate('Transaction')
  }

  const navToConversion = () => {
    setVisible(false)
    navigation.navigate('Conversion')
  }


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