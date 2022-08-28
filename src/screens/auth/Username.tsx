import React, { useState } from "react";
import { Box, Center, Text } from "native-base";

import Button from "../../components/Buttons/Button";
import FormHeader from "../../components/Headers/FormHeader";
import InputField from "../../components/InputField";
import { AuthNavigationProps } from "../../types/routes";
const Username = ({
  navigation,
  route
}: AuthNavigationProps<"Username">): JSX.Element => {
  const [username, setUsername] = React.useState<string>("");
const [error,setError]=useState(false)
const email=route.params?.email
const password=route.params?.password
  return (
    <Box alignItems="center">
      <Box mt={71} w="90%" maxWidth={375}>
        <FormHeader
          header="Choose a username"
          text="What should players call you? Create a username for yourself."
        />
        <Box mt={50}>
          <InputField
            label="Username"
            input={username}
            getInput={setUsername}
          />
          {error&&<Text color="red.500">please input a username</Text>}
        </Box>

        <Center flexDir="row" mt={50}>
          <Button
            text="Complete"
            callback={() => {
              if(!username){
              setError(true)
            }
            else{
              setError(false)
              navigation.navigate("Login")
              console.log({email,username,password})
            }
            }}
          />
        </Center>
      </Box>
    </Box>
  );
};

export default Username;
