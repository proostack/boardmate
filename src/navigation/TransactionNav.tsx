import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wallet from '../screens/dashboard/Wallet';
import Transaction from '../screens/dashboard/Transaction';
import Conversion from '../screens/dashboard/Conversion';
import { TransactionNavProps, TransactionRoutes } from '../types/routes';
import { HStack, Image, Text } from 'native-base';
import { Icons } from '../app';
import { TransactionNavItem, TransNavType } from '../types/generalTypes';
const Stack = createNativeStackNavigator<TransactionRoutes>()



const TransactionNav = (): JSX.Element => {
  const navItems:TransactionNavItem[]=[{
    name:'Wallet',
    component:Wallet
  },{
    name:'Transaction',
    component:Transaction
  },{
    name:'Conversion',
    component:Conversion
  }]
  
  return (
    <Stack.Navigator initialRouteName='Wallet' screenOptions={{
      headerStyle: {
        backgroundColor: "#794DE3"
      },
      animation: "slide_from_right",
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerTitleStyle: { fontFamily: "ReadexPro-Bold", fontSize: 20 }
    }}>
      {navItems.map((item:TransactionNavItem,index:number)=>(
        <Stack.Screen key={index} name={item.name} component={item.component} options={{
        headerTitle: () => (
          <HStack alignItems={"center"}>
            <Image source={Icons.wallet2} alt="dashboard" />
            <Text color={"white"} ml={"12px"} fontSize={20} fontFamily="ReadexProBold">
              Wallet
            </Text>
          </HStack>
        )
      }} />      ))}
    </Stack.Navigator>
  )
}

export default TransactionNav