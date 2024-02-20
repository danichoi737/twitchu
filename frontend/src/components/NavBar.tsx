import { Image } from "@chakra-ui/image";
import { HStack } from "@chakra-ui/layout";
import logo from "../assets/logo.png"; // Like icons created by Freepik
import AuthButtons from "./AuthButtons";

function NavBar() {
  return (
    <HStack padding="12px" justify="space-between">
      <Image boxSize="40px" src={logo} alt="Logo" />
      <AuthButtons />
    </HStack>
  );
}

export default NavBar;
