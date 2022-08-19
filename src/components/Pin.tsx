import { Box, Center, Text, Input, HStack } from 'native-base'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import FormHeader from './Headers/FormHeader'
import { TouchableOpacity } from 'react-native';

interface Props {
  header: string;
  headerText?: string;
  forgotText?: string;
  getPin?: (arr: string[]) => void;
}


const Pin = (props: Props): JSX.Element => {
  const [number, setNumber] = useState<string[]>([])

  if (props.getPin) props.getPin(number);


  return (
    <Center flexDir={"row"} >
      <Box maxW={375} mx="auto" mt={71}>

        <FormHeader header={props.header} text={props.headerText} />
        <HStack mt={100} space={3}>
          <Input value={number[0]} editable={false} w={63} borderColor="#794DE366" fontSize={20} fontFamily="ReadexProBold" color="accent_bg.50" textAlign="center" maxLength={1} />
          <Input value={number[1]} editable={false} w={63} borderColor="#794DE366" fontSize={20} fontFamily="ReadexProBold" color="accent_bg.50" textAlign="center" maxLength={1} />
          <Input value={number[2]} editable={false} w={63} borderColor="#794DE366" fontSize={20} fontFamily="ReadexProBold" color="accent_bg.50" textAlign="center" maxLength={1} />
          <Input value={number[3]} editable={false} w={63} borderColor="#794DE366" fontSize={20} fontFamily="ReadexProBold" color="accent_bg.50" textAlign="center" maxLength={1} />
        </HStack>
        <Text fontFamily={"ReadexProLight"} mt={30} textAlign="right" color={"accent_bg.50"}>{props.forgotText}</Text>



        <Box mt={100}>
          <HStack justifyContent="space-between">
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '1'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">1</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '2'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">2</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '3'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">3</Text>
              </Box>
            </TouchableOpacity>

          </HStack>

          <HStack mt={26} justifyContent="space-between">
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '4'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">4</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '5'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">5</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '6'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">6</Text>
              </Box>
            </TouchableOpacity>

          </HStack>


          <HStack mt={26} justifyContent="space-between">
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '7'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">7</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '8'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">8</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '9'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">9</Text>
              </Box>
            </TouchableOpacity>

          </HStack>

          <HStack mt={26} justifyContent="space-between" alignItems={"center"}>

            <TouchableOpacity>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50" opacity={0}>7</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number.length >= 4 ? number : [...number, '0'])}>
              <Box w="56px" h="41px">
                <Text fontSize={25} textAlign="center" fontFamily="ReadexProBold" color="accent_bg.50">0</Text>
              </Box>
            </TouchableOpacity>
            <Box w="56px" h="41px" justifyContent={"center"}>
              <Text textAlign={"center"}>
                <Feather onPress={() => setNumber(number.slice(0, number.length - 1))} name="delete" size={23} color="#794DE3" />
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Center>)
}

export default Pin