import React from 'react'
import {  FlatList, Image} from 'native-base'
import { Icons } from '../../../../../app'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { setTheme } from '../../../../../store/user'
import { useDispatch } from 'react-redux'
const theme = [
  Icons.theme1,
  Icons.theme2,
  Icons.theme3,
]

const Theme = ():JSX.Element => {
  const dispatch=useDispatch()
  return (
    <FlatList data={theme} numColumns={3} columnWrapperStyle={styles.columnWrapper1}
    renderItem={({ item, index }) => (
    <TouchableOpacity onPress={()=>dispatch(setTheme(index))}>
      <Image key={index} source={item} alt="theme" />
    </TouchableOpacity>
    )} /> 
     )
}

export default Theme

const styles = StyleSheet.create({
  columnWrapper1: { justifyContent: "space-between" },
  columnWrapper2: { justifyContent: "flex-end" }
})