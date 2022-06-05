<<<<<<< HEAD
import Button  from "../components/Buttons/Button";
import React from "react";
=======
import React from 'react'
>>>>>>> bf3f74c18813714bd42d9de82d0f4e20959d944f
import Card from "../components/Card";
import FormHeader from "../components/Headers/FormHeader";
import { Box,Heading,Text } from "native-base";
import FaceBook_Google from "../components/FaceBook_Google";
import InputField from "../components/InputField";
import CountryPicker from "../components/countryPicker/CountryPicker";
export default function Onboarding() {
const [email,setEmail]=React.useState<string>("")
const [password,setPassword]=React.useState<string>("")
const [show,setShow]=React.useState<boolean>(true)

<<<<<<< HEAD
const setVisibilty=()=>{
    setShow(!show)
}
console.log(show)
=======
function Onboarding(): JSX.Element {
>>>>>>> bf3f74c18813714bd42d9de82d0f4e20959d944f
    return(
        <>
        {/* <Card /> */}
        <Box mt={71}> 
         <FormHeader text="testing login component" header="Login"/></Box>
         <CountryPicker/>
        {/* <InputField input={email} getInput={setEmail} label="Email"/>
        <InputField input={password} getInput={setPassword} label="Password" setVisibilty={setVisibilty} visibility={show}/>
        <Button text="Login"/>
       <FaceBook_Google/> */}
       


        </>
    )
}
export default Onboarding
