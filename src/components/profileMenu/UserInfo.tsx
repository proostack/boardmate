import React from 'react'
import { Text,Box, FlatList, Button, Square,Image, HStack, Heading} from "native-base";
import { ImageSourcePropType } from 'react-native';

interface Props {
  image:ImageSourcePropType;
  name:string;
  profileDetails:string[]
}

const UserInfo = ({image,name,profileDetails}:Props) => {
  return (
    <>
      <Square size={100} borderRadius={8} borderColor={"rgba(255, 255, 255, 1)"} borderWidth={1}>
        <Image source={image} alt="profile image"/>
      </Square>
      <Box ml={23}>
        <Heading fontFamily={"ReadexProBold"} fontSize={16} mb={2} color={"white"}>
         {name}
        </Heading>
        {profileDetails.map((profileDetail,index)=>(
                 <Text key={index} fontFamily={"ReadexProBold"} mt={"10px"} fontSize={10} opacity={.6} color={"white"}>
                 {profileDetail}     
                 </Text>
        )
        )}
      </Box>
      </>
  )
}

export default UserInfo