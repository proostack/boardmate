import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import Onboarding from "../screens/Onboarding";
import { AuthRoutes } from "../types/routes";
import ChooseHow from "../screens/password/ChooseHow";
import ForgotPwd from "../screens/password/ForgotPwd";
import Email from "../screens/password/Email";
import Phone from "../screens/password/Phone";
import Country from "../screens/auth/Country";
import ResetPwd from "../screens/password/ResetPwd";
import Username from "../screens/auth/Username";
import LoginPin from "../screens/pin/LoginPin";
import ResetPin from "../screens/pin/ResetPin";
import TransactionPin from "../screens/pin/TransactionPin";
import Games from "../screens/dashboard/Games";
import DashboardNav from "./DashboardNav";

const AuthNavigation = (): JSX.Element => {
  const Stack = createNativeStackNavigator<AuthRoutes>();
  return (
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={Onboarding}/>
        <Stack.Screen name="SignUp"  component={SignUp} />
        <Stack.Screen name="Login"  component={SignIn}/>
        <Stack.Screen name="ChooseHow"  component={ChooseHow}/>
        <Stack.Screen name="ForgotPassword"  component={ForgotPwd}/>
        <Stack.Screen name="Email"  component={Email}/>
        <Stack.Screen name="Phone"  component={Phone}/>
        <Stack.Screen name="Country"  component={Country}/>
        <Stack.Screen name="ResetPwd"  component={ResetPwd}/>
        <Stack.Screen name="Username"  component={Username}/>
        <Stack.Screen name="LoginPin"  component={LoginPin}/>
        <Stack.Screen name="ResetPin"  component={ResetPin}/>
        <Stack.Screen name="TransactionPin"  component={TransactionPin}/>
        <Stack.Screen name="Dashboard"  component={DashboardNav}/>
      </Stack.Navigator>
  );
};

export default AuthNavigation;
