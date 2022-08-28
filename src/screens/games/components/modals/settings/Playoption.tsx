import React from 'react'
import { Box, Button, Circle, FlatList, HStack, Image, Text } from 'native-base';
import { Icons } from '../../../../../app'
import { StyleSheet } from 'react-native';

const playOptions = [
  Icons.playopt1,
  Icons.playopt2,
  Icons.playopt3
]


const Playoption = () => {
  return (
    <HStack mt="50px" mb="87px" alignItems={"center"} justifyContent="space-between">
    <Text fontFamily={"ReadexProBold"} color="white">Play as</Text>
    <FlatList data={playOptions} numColumns={3} columnWrapperStyle={styles.columnWrapper2} renderItem={({ item, index }) => (
      <Image key={index} mx="5px" size={31} source={item} alt="play option" />
    )} />
  </HStack>  )
}

export default Playoption;

const styles = StyleSheet.create({
  columnWrapper1: { justifyContent: "space-between" },
  columnWrapper2: { justifyContent: "flex-end" }
})