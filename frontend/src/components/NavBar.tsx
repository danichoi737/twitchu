import { Image } from "@chakra-ui/image";
import { HStack } from "@chakra-ui/layout";
import logo from "../assets/logo.png"; // Like icons created by Freepik
import AuthButtons from "./AuthButtons";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack padding="12px" justify="space-between">
      <Image boxSize="40px" src={logo} alt="Logo" />
      <ColorModeSwitch />
      <AuthButtons />
    </HStack>
  );
}

export default NavBar;
