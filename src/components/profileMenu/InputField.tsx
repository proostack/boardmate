import React, { Dispatch, SetStateAction } from 'react'
import { Text, Input, Icon, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons"
interface Props {
  label: string;
  input: string;
  setVisibility?: () => void;
  visiblity?: boolean;
  editable?: boolean;
  setInput?: Dispatch<SetStateAction<string>>;
}
const InputField = ({
  input,
  label,
  visiblity,
  setVisibility,
  editable, setInput
}: Props): JSX.Element => {
  return (
    <>
      <Text color={"white"} fontFamily={"ReadexProBold"} fontSize={14} mb={"5px"}>{label}</Text>
      <Input onChangeText={setInput}
        type={label.includes("Password" )&& visiblity ? "password" : "text"}
        InputRightElement={<Icon mr={"12px"}
          as={label.includes("Password") ? <MaterialIcons onPress={setVisibility}
            name={visiblity ? 'visibility-off' : "visibility"} />
            : null}
        />}
        variant={"unstyled"}
        fontFamily={"ReadexProBold"}
        value={input}
        editable={editable}
        bgColor="rgba(52, 54, 76, 1)"
        borderRadius={8}
        fontSize={12}
        color="white"
        h={44}
        px={"12px"}
      />
    </>
  )
}

export default InputField