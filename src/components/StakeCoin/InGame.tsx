import { Box, FlatList, Image, ScrollView } from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'
import { Icons } from '../../app'
import Avatar from './Avatar'
import { RootState } from '../../store/store'
import { SafeAreaView } from 'react-native'
import Button from '../Buttons/Button'

const InGame = (): JSX.Element => {
  const { defaultUsers } = useSelector((state: RootState) => state.user)

  return (
    <SafeAreaView style={{ marginBottom: 70 }}>
      <FlatList data={defaultUsers} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => index <= ((index + 1) / 2) ? (
        <Box my={5}>
          <Avatar img={defaultUsers[index].image} name={defaultUsers[index].name} alignSelf="flex-start" />
          <Box position={"relative"}>
            <Image source={Icons.overlayboard} alt="In game" />
            <Box position={"absolute"} justifyContent="center" h="100%" w="100%">
              <Box w="80%" mx="auto">
                <Button text='Stake' callback={() => console.log("Stakinggggg")} />
              </Box>
            </Box>
          </Box>
          <Avatar img={defaultUsers[index + 1].image} name={defaultUsers[index + 1].name} alignSelf={"flex-end"} />
        </Box>
      ) : null} />
    </SafeAreaView>
  )
}

export default InGame