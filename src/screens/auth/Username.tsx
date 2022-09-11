import React, { useEffect } from "react";
import { Box, Center, Spinner, Text } from "native-base";
import { gql, useMutation } from "@apollo/client";
import Button from "../../components/Buttons/Button";
import FormHeader from "../../components/Headers/FormHeader";
import InputField from "../../components/InputField";
import { AuthNavigationProps } from "../../types/routes";
import { SIGNUP_USER } from "../../services/auth/SignUpUser";
import useAuth from "../../hooks/useAuth";


const Username = ({
  navigation,
  route
}: AuthNavigationProps<"Username">): JSX.Element => {
  const [username, setUsername] = React.useState<string>("");
  const email = route.params?.email
  const password = route.params?.password
  const navigateUser = () => {
    navigation.navigate("Login")
  }

  const { fireMutation, error, loading, called } = useAuth(navigateUser, SIGNUP_USER)

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
          {(called && error) && <Text
            color="red.500"
          >
            {error.message}
          </Text>}
        </Box>

        <Center flexDir="row" mt={50}>
          <Button
            disabled={!username}
            callback={() => {
              fireMutation({
                variables: {
                  email,
                  password,
                  username
                }
              })
            }}
          >
            <>
              {(called && loading) && <Spinner color={"white"} />}
              {!loading && <Text
                fontFamily="ReadexProBold"
                fontSize={16}
                color="white"
              >
                Complete
              </Text>}
            </>
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Username;