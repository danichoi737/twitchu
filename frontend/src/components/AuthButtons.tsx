import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";

function AuthButtons() {
  return (
    <HStack>
      <Button colorScheme="pink" variant="outline">
        Sign in
      </Button>
      <Button colorScheme="pink">Sign up</Button>
    </HStack>
  );
}

export default AuthButtons;
