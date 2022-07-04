import React, { useRef, useState } from 'react'
import { Text,Box, FlatList, Button, Heading, Image, HStack} from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity } from 'react-native';
import RulesSlider from '../../components/profileMenu/rules/RulesSlider';
import { array } from 'yup';

const rules:{img:ImageSourcePropType,type:string,text:string}[]=[{
img:require('../../../assets/images/profileMenu/rules/Pawn.png'),
type:"Pawn",
text:"Pawns only move forward. On the first move a pawn can move one or two spaces, every subsequent move can only be one space. Pawns move diagonally to take opponents."
},
{
  img:require('../../../assets/images/profileMenu/rules/King.png'),
  type:"King",
  text:"Restricted to one move per-turn. The king can move in any direction, one square at a time. A king cannot move to a square that is under attack by the opponent."
  },
  {
    img:require('../../../assets/images/profileMenu/rules/Rook.png'),
    type:"Rook",
    text:" Rooks move in a continuous line forwards, backwards and side-to-side. Only moves straight and can move as far as its line of sight."
    },
    {
      img:require('../../../assets/images/profileMenu/rules/Bishop.png'),
      type:"Bishop",
      text:"Bishops move in continuous diagonal lines in any direction and  move as far as its lune of sight. "
      },
      {
        img:require('../../../assets/images/profileMenu/rules/Knight.png'),
        type:"Knight",
        text:`Moves in an L-shape: 2 up 1 left or 1 up 2 left or right. Knights are the only pieces that "jump" off the board. Unlike other pieces they are not blocked if there are pieces between them and their destination square.`
        
        },
        {
          img:require('../../../assets/images/profileMenu/rules/Queen.png'),
          type:"Queen",
          text:"The queen moves in continuous diagonal and straight lines. Forward, backward and side-to-side. Can also capture on any square in line of sight "
          },
         
]

const {width}=Dimensions.get("screen");

// console.log(width)



const Help = ():JSX.Element => {


  const [currentIndex,setCurrentIndex]=useState(0)
  
  const ref=useRef<any>(null)

  const goNext=()=>{
    const nextSlideIndex=currentIndex+1;
if(nextSlideIndex<rules.length){
  setCurrentIndex(nextSlideIndex)
}
    const offset=nextSlideIndex*width;
    console.log(offset)
    ref?.current?.scrollToOffset({offset})
  }

  const goBack=()=>{
    const backSlideIndex=currentIndex-1;
    if(backSlideIndex>=0){
      setCurrentIndex(backSlideIndex)
    }
    const offset=backSlideIndex*width;
    ref?.current?.scrollToOffset({offset})
  }


  const offset=(e:NativeSyntheticEvent<NativeScrollEvent>)=>{
    const offsetX=e.nativeEvent.contentOffset.x
  setCurrentIndex(Math.round(offsetX/width))
  }
  

  // console.log(currentIndex)

  return (
<SafeAreaView>
<Heading textAlign={"center"} fontSize={30} mt={"44px"}>Rules of Chess</Heading>
  <FlatList ref={ref} onMomentumScrollEnd={offset} pagingEnabled showsHorizontalScrollIndicator={false} horizontal={true} data={rules} renderItem={({item,index})=>(
       <Box px={"23px"} key={index} width={width}>
        <Box maxWidth={"318px"} mx="auto">
        <RulesSlider {...item} index={index}/>
        </Box>
       </Box>
  )
}/>


       <Box maxWidth={"318px"} mx="auto" w={"100%"} mt={"26px"} >
       <HStack justifyContent={"space-between"}>
  <Button onPress={goBack} fontFamily={"ReadexProBold"} w={"90px"} fontSize="12px" borderRadius={5}  borderWidth={1} borderColor="accent_bg.50"  variant={"unstyled"}><Text color={"accent_bg.50"}>Previous</Text></Button>


  <Button onPress={goNext} fontFamily={"ReadexProBold"} w={"90px"} fontSize="12px" borderRadius={5}   bgColor={"rgba(121, 77, 227, 1)"} variant={"unstyled"}><Text color={"white"}>Next</Text></Button>


  </HStack>
</Box>
</SafeAreaView>
    )
}

export default Help