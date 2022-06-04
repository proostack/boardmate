import Button  from "../components/Buttons/Button";
import React from "react";
import Card from "../components/Card";
import FormHeader from "../components/Headers/FormHeader";
import { Box,Heading,Select,Text } from "native-base";
import FaceBook_Google from "../components/FaceBook_Google";
import InputField from "../components/InputField";

export default function Onboarding() {
const [email,setEmail]=React.useState("")
const [password,setPassword]=React.useState("")
const [show,setShow]=React.useState(true)
const [language, setLanguage] = React.useState<string>('key0');

const setVisibilty=()=>{
    setShow(!show)
}
console.log(show)
    return(
        <>
        {/* <Card /> */}
        {/* <Box mt={71}>  <FormHeader text="testing login component" header="Login"/></Box>
        <InputField input={email} getInput={setEmail} label="Email"/>
        <InputField input={password} getInput={setPassword} label="Password" setVisibilty={setVisibilty} visibility={show}/>
        <Button text="Login"/>
       <FaceBook_Google/> */}

<Select mt={30}
      placeholder="Mode of payment"
      selectedValue={language}
      width={150}
      onValueChange={(itemValue: string) => setLanguage(itemValue)}
    >
      <Select.Item label="Wallet" value="key0" />
      <Select.Item label="ATM Card" value="key1" />
      <Select.Item label="Debit Card" value="key2" />
      <Select.Item label="Credit Card" value="key3" />
      <Select.Item label="Net Banking" value="key4" />
    </Select>
        </>
    )
}
