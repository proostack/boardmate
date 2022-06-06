import React from "react";
import { Button, Container, Text } from "native-base";
import Onboarding from "../Onboarding";
const SignIn = (): JSX.Element => {
  return (
    <Container py="8" px="10">
      <Text fontSize="3xl" fontFamily="MulishBold">
        Sigin in component
      </Text>
      <Button>Sign up</Button>
      <Onboarding />
    </Container>
  );
};

export default SignIn;
