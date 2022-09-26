import React from 'react'
import { Center, Square } from "native-base";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const width = 100

const Wallet = (): JSX.Element => {
  const pressed = useSharedValue(false)
  const x=useSharedValue(0)
  const y=useSharedValue(0)

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(pressed.value ? "blue" : "green"),
      transform:[{translateX:x.value},{translateY:y.value}]
    }
  })
  const eventHandler = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = true
    },
    onActive:({translationX,translationY})=>{
      x.value=translationX
      y.value=translationY
    },
    onEnd: ({translationX,translationY}) => {
      pressed.value = false
      x.value= 0
      y.value=0
    }
  })
  return (
    <Center flex={1}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.square,uas]}/>
      </PanGestureHandler>
    </Center>
  )
}

export default Wallet
const styles=StyleSheet.create({
 square:{
  backgroundColor:"green",
  width,
  height:width
 }
})