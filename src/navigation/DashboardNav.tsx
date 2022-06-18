import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Games from '../screens/dashboard/Games';
import { DashboardRoutes } from '../types/routes';
import ChoosePlayer from '../screens/dashboard/ChoosePlayer';
import ChooseFriend from '../screens/dashboard/ChooseFriend';
const Stack=createNativeStackNavigator<DashboardRoutes>()


const DashboardNav = ():JSX.Element => {
  return (
    <Stack.Navigator initialRouteName='Games' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Games" component={Games}/>
      <Stack.Screen name="ChoosePlayer" component={ChoosePlayer}/>
      <Stack.Screen name="ChooseFriend" component={ChooseFriend}/>
    </Stack.Navigator>
  )
}

export default DashboardNav