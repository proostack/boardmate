import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardNav from './DashboardNav';


const Tabs=createBottomTabNavigator();


const TabsNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={DashboardNav} />
    </Tabs.Navigator>
  )
}

export default TabsNavigation
