import React from 'react'
import { StyleSheet, Dimensions, View, Text, Image, ImageSourcePropType } from "react-native";
import { AntDesign } from '@expo/vector-icons';
interface Props{
  name:string;
  image:ImageSourcePropType
}
const ScoreBoard = ({name,image}:Props):JSX.Element => {
  return (
<View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:27}}>
        <View style={{flexDirection:"row",}}>
        <View style={{backgroundColor:"#373644",width:50,height:50,marginRight:14,justifyContent:"center",alignItems:"center",borderRadius:100/2}}>
          <Image source={image} style={{width:32,height:32,}}/>
        </View>
        <View>
          <Text style={{color:"white",fontFamily:"ReadexPro-Bold"}}>{name} (323)</Text>
          <View style={{width:101,height:30,backgroundColor:"#373644",marginTop:8,borderWidth:1,borderRadius:5,borderColor:"#E1D9D90D"}}></View>
        </View>
        </View>
       
       <View>
       <AntDesign name="clockcircle" size={24} color="white" />
        <Text style={{color:"white",marginTop:8,fontWeight:"bold"}}>00.02</Text>
       </View>
      </View>  )
}

export default ScoreBoard