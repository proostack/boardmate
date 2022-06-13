import {   RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes> {
  navigation: CompositeNavigationProp<
  NativeStackNavigationProp<AuthRoutes, RouteName>,
  DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthRoutes, RouteName>;
}

export type AuthRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordReset: undefined;
  ChooseHow: undefined;
  Email: undefined;
  Phone: undefined;
  Country: undefined;
  ResetPwd:undefined;
  Username:undefined;
  LoginPin:undefined;
  ResetPin:undefined;
  TransactionPin:undefined;
};

export type Main = {
    AuthNavigation: undefined;
}