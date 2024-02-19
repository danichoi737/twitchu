import { Button } from "@chakra-ui/button";
import { Box, HStack, Heading, VStack } from "@chakra-ui/layout";

function App() {
  return (
    <Box display="flex" justifyContent="center">
      <VStack>
        <Heading as="h1">Welcome to Twitchu!</Heading>
        <HStack marginTop={5}>
          <Button colorScheme="blue">Sign in</Button>
          <Button colorScheme="blue">Sign up</Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default App;
