import React from 'react'
import { Box } from 'native-base'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileMenu from '../screens/ProfileMenu/ProfileMenu'
import Dashboard from '../screens/ProfileMenu/Dashboard'
import { ProfileRoutes } from '../types/routes'

const Stack =createNativeStackNavigator<ProfileRoutes>()

const ProfileNav = ():JSX.Element => {
  return (
    <Stack.Navigator initialRouteName='ProfileMenu' screenOptions={{headerShown:false}}>
      <Stack.Screen name="ProfileMenu" component={ProfileMenu}/>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
    </Stack.Navigator>
  )
}

export default ProfileNav