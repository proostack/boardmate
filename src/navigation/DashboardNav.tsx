import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Games from '../screens/dashboard/Games';
import { DashboardRoutes } from '../types/routes';
import ChoosePlayer from '../screens/dashboard/ChoosePlayer';
import ChooseFriend from '../screens/dashboard/ChooseFriend';
import PlayRandom from '../screens/dashboard/PlayRandom';
import ChallengeFriend from '../screens/dashboard/ChallengeFriend';
import ChallengeWorld from '../screens/dashboard/WagerAmount';
import WagerAmount from '../screens/dashboard/WagerAmount';
import Dashboard from "../screens/ProfileMenu/Dashboard"
const Stack=createNativeStackNavigator<DashboardRoutes>()


const DashboardNav = ():JSX.Element => {
  return (
    <Stack.Navigator initialRouteName='Games' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Games" component={Games}/>
      <Stack.Screen name="ChoosePlayer" component={ChoosePlayer}/>
      <Stack.Screen name="ChooseFriend" component={ChooseFriend}/>
      <Stack.Screen name="PlayRandom" component={PlayRandom}/>
      <Stack.Screen name="ChallengeFriend" component={ChallengeFriend}/>
      <Stack.Screen name="WagerAmount" component={WagerAmount}/>
    </Stack.Navigator>
  )
}

export default DashboardNav