import React from 'react'
import { Box, Center, Text, Circle, Image, Heading, HStack, Container } from "native-base";
import Pagination from './Pagination';
import { Dimensions, ImageSourcePropType, StyleSheet } from 'react-native';
import { MotiView, AnimatePresence } from 'moti'
import { Easing } from 'react-native-reanimated';

interface Props {
  bgColor: string;
  circleOneColor: string;
  circleTwoColor: string;
navigation:()=>void;
  image: ImageSourcePropType;
  header: string;
  text: string;
  data:{ bgColor: string; circleOneColor: string; circleTwoColor: string; image: ImageSourcePropType; header: string; text: string; }[];
  index:number;
  animateColorOne:string;
  animateColorTwo:string
}

const {width, height} = Dimensions.get('screen');



const OnBoarding = ({bgColor,circleOneColor,circleTwoColor,image,header,text,index,data,animateColorOne,animateColorTwo}: Props):JSX.Element => {

  return (
    <Center flex={1} bgColor={bgColor}>
  
        <Center>

<Center >
  
   {[...Array(6).keys()].map(i=>(

<MotiView key={i} style={[StyleSheet.absoluteFill,{backgroundColor:circleTwoColor,borderRadius:200}]} from={{scale:1,opacity:.5}}
animate={{scale:3,opacity:0}}  transition={{type:"timing",duration:4000,loop:true,easing:Easing.out(Easing.ease),
delay:i*400,repeatReverse:false
}}
/>))}


            <MotiView  from={{scale:0.8}}
animate={{scale:1.1}}  transition={{type:"timing",duration:2000,loop:true,easing:Easing.out(Easing.ease),
delay:200
}} style={{backgroundColor:circleTwoColor,height:200,width:200,alignItems:"center",justifyContent:"center",borderRadius:100,}}>
              <Image source={image} alt="chess" />
            </MotiView>
    

            </Center>

          <Heading mt={70} color="white" fontFamily="ReadexProBold">{header}</Heading>
          <Text color="white" fontFamily="ReadexProLight" mt={22}>{text}</Text>
          <HStack space={3} mt={62}>
          <Pagination currentIndex={index} data={data}/>
          </HStack>
        </Center>

    </Center>
  )
}

export default OnBoarding
