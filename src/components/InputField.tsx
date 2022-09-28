import React from 'react'
import { Box, Icon, Input, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  label: string;
  getInput: (input: string) => void;
  input: string;
  visibility?: boolean;
  setVisibilty?: () => void;
  bgColor?: string;
  labelColor?: string;
  placeholder?: string;
  keysType?: string
}
const InputField = ({ keysType, label, getInput, input, visibility, setVisibilty, bgColor, labelColor, placeholder }: Props): JSX.Element => {
  return (
    <Box>
      <Text fontSize={16}
        fontFamily="ReadexProBold"
        color={labelColor ? labelColor : "#393939"}
        mb={13}
      >
        {label.includes('Search') ? "" : label}
      </Text>
      <Input
        keyboardType={keysType === 'number' ? 'number-pad' : "default"}
        bgColor={
          bgColor ? bgColor : "#F9F9FA"
        }
        value={input}
        onChangeText={getInput}
        variant="unstyled"
        w="100%" h="66"
        fontSize={"16px"}
        placeholder={
          placeholder ? placeholder : `${label}`
        }
        InputRightElement={
          <Icon as={(label.includes("Password")) && <MaterialIcons
            onPress={setVisibilty}
            name={visibility ? 'visibility' : 'visibility-off'}
          />}
            size={5} mr={5}
          />}

        InputLeftElement={
          label === 'Username' ? <Text color="accent_bg.50"
            mx="10px"
            fontSize="40px"
          >
            @
          </Text>
            :
            undefined
        }
        type={visibility ? "password" : "text"}
      />
    </Box>
  )
}

export default InputField

// 