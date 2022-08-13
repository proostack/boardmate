import React from "react";
import { Box, Center, Text } from "native-base";

import Button from "../../components/Buttons/Button";
import FormHeader from "../../components/Headers/FormHeader";
import InputField from "../../components/InputField";
import { AuthNavigationProps } from "../../types/routes";
const Username = ({
  navigation,
}: AuthNavigationProps<"Username">): JSX.Element => {
  const [username, setUsername] = React.useState<string>("");

  return (
    <Box alignItems="center">
      <Center mt={71} maxWidth={375}>
        <FormHeader
          header="Choose a username"
          text="What should players call you? Create a username for yourself."
        />
        <Center mt={50}>
          <InputField
            label="Username"
            input={username}
            getInput={setUsername}
          />
        </Center>

        <Center flexDir="row" mt={50}>
          <Button
            text="Complete"
            callback={() => navigation.navigate("TransactionPin")}
          />
        </Center>
      </Center>
    </Box>
  );
};

export default Username;
