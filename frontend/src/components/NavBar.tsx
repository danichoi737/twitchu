import { Image } from "@chakra-ui/image";
import { HStack } from "@chakra-ui/layout";
import logo from "../assets/logo.png"; // Like icons created by Freepik

function NavBar() {
  return (
    <HStack padding="12px">
      <Image boxSize="40px" src={logo} alt="Logo" />
    </HStack>
  );
}

export default NavBar;
