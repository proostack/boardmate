import { RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ImageSourcePropType } from "react-native";

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


export interface DashBoardNavProps<RouteName extends keyof DashboardRoutes> {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<DashboardRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<DashboardRoutes, RouteName>;
}

export interface ProfileNavProps<RouteName extends keyof ProfileRoutes> {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<ProfileRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<ProfileRoutes, RouteName>;
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
  Country: Readonly<{email:string,password:string}>| undefined;
  ResetPwd: undefined;
  Username: Readonly<{email?:string,password?:string}>| undefined;
  LoginPin: undefined;
  ResetPin: undefined;
  TransactionPin: undefined;
  Dashboard: undefined
};

export type DashboardRoutes = {
  Games: undefined;
  ChoosePlayer:Readonly<{name?:string}> | undefined;
  ChooseFriend:Readonly<{name?:string,image?:ImageSourcePropType}> | undefined;
  PlayRandom: Readonly<{name?:string,image?:ImageSourcePropType}> | undefined;
  ChallengeFriend: undefined;
  WagerAmount: Readonly<{name?:string,image?:ImageSourcePropType}> | undefined;
  Chess:Readonly<{name?:string,image?:ImageSourcePropType}> | undefined;
}
export type Main = {
  AuthNavigation: undefined;
  DashboardNav: undefined;
}

export type ProfileRoutes={
  Dashboard:undefined;
  ProfileMenu:undefined;
Friends:undefined;
Watch:undefined;
Rules:undefined;
Help:undefined;
Learn:undefined;
User:undefined
Stake:undefined;
}