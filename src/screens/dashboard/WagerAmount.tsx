import React from 'react'
import { Text, Center, Box, FlatList, HStack, Image, Button as NativeBtn, Heading, Square } from "native-base";
import Goback from '../../components/Goback';
import { DashBoardNavProps } from '../../types/routes';
import Button from '../../components/Buttons/Button';
const amounts: { wager: number, choose: boolean }[] = [{ wager: 200, choose: false }, { wager: 500, choose: false }, { wager: 1000, choose: false }, { wager: 2000, choose: false }, { wager: 3000, choose: false }, { wager: 5000, choose: false }
]


const WagerAmount = ({ navigation,route }: DashBoardNavProps<"WagerAmount">): JSX.Element => {
  const [wagers, setWagers] = React.useState(amounts)

  const [wager, setWager] = React.useState<null | number>(null)

  const handleChoose = (amount: { wager: number, choose: boolean }) => {
    setWagers(wagers.map(item => item.wager === amount.wager ? ({ ...item, choose: true }) : { ...item, choose: false }))
  }
  
  return (
    <Center>
      <Box maxW={375} w="100%" mt={62}>
        <Goback callback={() => navigation.goBack()} />
        <Heading fontFamily="ReadexProBold" w={100} fontSize={20} fontWeight={600}>
          Wager Amount
        </Heading>
        <Text mt={30} color="rgba(57, 57, 57, 1)" opacity={.7} fontFamily={"ReadexProLight"}>
          Select a wagering amount
        </Text>
        <FlatList data={wagers} mt={50} columnWrapperStyle={{ justifyContent: "space-between" }} numColumns={3} renderItem={({ item }) => (
          <NativeBtn onPress={() => { setWager(item.wager); handleChoose(item) }} bgColor={item.choose ? "accent_bg.50" : "transparent"} variant={"unstyled"} mb={50} borderColor={"accent_bg.50"} borderWidth={1} borderRadius={8} h={33}>
            <Text fontSize={10} color={item.choose ? "white" : "accent_bg.50"} fontFamily="ReadexProRegular">
              NGN {item.wager}
            </Text>
          </NativeBtn>
        )}/>

        <Box w={263} mx="auto">
          <Button callback={() => navigation.navigate("PlayRandom",{name:route.params?.name,image:route.params?.image})} disabled={wager ? false : true} text='Continue' />
        </Box>
      </Box>
    </Center>
    )
}

export default WagerAmount