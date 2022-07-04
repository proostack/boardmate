import React from 'react'
import {HStack, Image, Text } from 'native-base'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileMenu from '../screens/ProfileMenu/ProfileMenu'
import Dashboard from '../screens/ProfileMenu/Dashboard'
import { ProfileNavProps, ProfileRoutes } from '../types/routes'
import {ImageSourcePropType } from 'react-native'
import Friends from '../screens/ProfileMenu/Friends'
import Watch from '../screens/ProfileMenu/Watch'
import Rules from '../screens/ProfileMenu/Rules'
import Help from '../screens/ProfileMenu/Help'
import Learn from '../screens/ProfileMenu/Learn'
import Profile from '../screens/ProfileMenu/Profile'


const routes:{component:({ navigation }: ProfileNavProps<"Dashboard">)=>JSX.Element,name: keyof ProfileRoutes,image?:ImageSourcePropType,title:string}[]=[{
  component:Dashboard,
  name:"Dashboard",
  image:require("../../assets/images/profileMenu/dashboard.png"),
  title:"Dashboard"
},
{
  component:Profile,
  name:"User",
  image:require("../../assets/images/profileMenu/profile.png"),
  title:"Profile"
},
{
  component:ProfileMenu,
  name:"ProfileMenu",
  title:"Chess"
},
{
  component:Friends, 
  name:"Friends",
  image:require("../../assets/images/profileMenu/friends.png"),
  title:"Friends"
},
{
  component:Watch,
  name:"Watch",
  image:require("../../assets/images/profileMenu/watch.png"),
  title:"Watch"
},
{
  component:Rules,
  name:"Rules",
  image:require("../../assets/images/profileMenu/rules.png"),
  title:"Rules"
},
{
  component:Help,
  name:"Help",
  image:require("../../assets/images/profileMenu/help.png"),
  title:"Help"
},

{
  component:Learn,
  name:"Learn",
  image:require("../../assets/images/profileMenu/learn.png"),
  title:"Learn"
},
]











const Stack =createNativeStackNavigator<ProfileRoutes>()
const ProfileNav = ():JSX.Element => {
  return (
    <Stack.Navigator initialRouteName='ProfileMenu' screenOptions={{
headerStyle:{backgroundColor:"#794DE3"}, animation:"slide_from_right",headerTitleAlign:"center",headerTintColor:"white",headerTitleStyle:{fontFamily:"ReadexPro-Bold", fontSize:20}
   
   }}>
{routes.map((item,index)=>((!item.image)?<Stack.Screen key={index} name={item.name} options={{title:item.title}} component={ProfileMenu}/>
: 
<Stack.Screen  key={index} name={item.name} component={item.component} options={ 
  
  {headerShown:item.name=="Watch"||item.name=="Help"?false:true,headerTitle:()=>(
        <HStack alignItems={"center"}>
          <Image source={item.image} alt="dashboard"/>
      <Text color={"white"} ml={"12px"} fontSize={20} fontFamily="ReadexProBold">{item.title}</Text>

        </HStack>
      )}}/>
))}

    </Stack.Navigator>
  )
}

export default ProfileNav