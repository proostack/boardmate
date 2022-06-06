import Button  from "../components/Buttons/Button";
import React from "react";
import Card from "../components/Card";
import FormHeader from "../components/Headers/FormHeader";
import { Box,Heading,Text } from "native-base";
import FaceBook_Google from "../components/FaceBook_Google";
import InputField from "../components/InputField";
import CountryPicker from "../components/countryPicker/CountryPicker";
import SexAvatar from "../components/avatars/SexAvatar";
export default function Onboarding() {
const [email,setEmail]=React.useState<string>("")
const [password,setPassword]=React.useState<string>("")
const [show,setShow]=React.useState<boolean>(true)

const setVisibilty=()=>{
    setShow(!show)
}
console.log(show)
    return(
        <>
        {/* <Card /> */}
        <Box mt={71}> 
         <FormHeader text="testing login component" header="Login"/>
         <Box>
         <SexAvatar sex="male" choose={true} image={require("../../assets/images/avatars/boy.png")}/>
         <SexAvatar sex="female" choose={false} image={require("../../assets/images/avatars/girl.png")}/>
         {/* <SexAvatar/> */}
         </Box>
      
         </Box>

         {/* <CountryPicker/> */}
        {/* <InputField input={email} getInput={setEmail} label="Email"/>
        <InputField input={password} getInput={setPassword} label="Password" setVisibilty={setVisibilty} visibility={show}/>
        <Button text="Login"/>
       <FaceBook_Google/> */}
       


        </>
    )
}
