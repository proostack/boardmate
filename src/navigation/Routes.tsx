import React from 'react'
import AuthNavigation from './AuthNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main} from '../types/routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import DashboardNav from './DashboardNav';
import ProfileMenu from '../screens/dashboard/ProfileMenu';
import Wallet from '../screens/dashboard/Wallet';
import { Circle, Image } from 'native-base';
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';

const getRouteName=(route:Partial<Route<string>>)=>{
  console.log(route)
}
const Stack = createNativeStackNavigator<Main>();
const Tabs=createBottomTabNavigator()



const Routes = (): JSX.Element => {
const {keyToken}=useSelector((state:RootState)=>state.user)
console.log(keyToken)
const defaultToken=true
if(defaultToken){
  return (

    <Tabs.Navigator  screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{
      position:'absolute',height:76,borderTopEndRadius:30, borderTopStartRadius:30
    }}}>
    <Tabs.Screen name='DashboardNav' component={DashboardNav} options={{tabBarIcon:({focused})=>(
      <Circle size={50} bgColor={focused?"rgba(119, 111, 254, 1)":"transparent"}>
     
{focused?<Image source={require("../../assets/images/navigation/home2.png")} alt="home"/>:<Image source={require("../../assets/images/navigation/home.png")} alt="home"/>}
      </Circle>
    )}}/>

    <Tabs.Screen name='Wallet' component={Wallet} options={{tabBarIcon:({focused})=>(
    <Circle size={50} bgColor={focused?"rgba(119, 111, 254, 1)":"transparent"}>

    <Image source={require("../../assets/images/navigation/Wallet.png")} alt="wallet"/>
    </Circle>
    ),tabBarStyle:{display:"none"}}}/>
    
    <Tabs.Screen name='Profile' component={ProfileMenu} options={{tabBarIcon:({focused})=>(
     <Circle size={50} bgColor={focused?"rgba(119, 111, 254, 1)":"transparent"}>
{focused? <Image source={require("../../assets/images/navigation/user2.png")} alt="profile"/>: <Image source={require("../../assets/images/navigation/user.png")} alt="profile"/>}
    
     </Circle>
    )}}/>
    </Tabs.Navigator>


  )
}

else{
 return( 
  <Stack.Navigator>
  <Stack.Screen
    options={{ headerShown: false }}
    name="AuthNavigation"
    component={AuthNavigation}
  />
</Stack.Navigator>
 

 )
}
};
export default Routes;
