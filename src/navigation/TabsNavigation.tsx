import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardNav from './DashboardNav';


const Tabs=createBottomTabNavigator();


const TabsNavigation = ():JSX.Element => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={DashboardNav} />
    </Tabs.Navigator>
  )
}

export default TabsNavigation
