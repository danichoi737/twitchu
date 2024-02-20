import { Button } from "@chakra-ui/button";
import { Box, Flex, HStack, Heading, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <Flex height="100vh">
      <SideMenu width="240px" />
      <Box width="100%">
        <NavBar />
        <VStack>
          <Heading as="h1">Welcome to Twitchu!</Heading>
          <HStack marginTop={5}>
            <Button colorScheme="blue">Sign in</Button>
            <Button colorScheme="blue">Sign up</Button>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
