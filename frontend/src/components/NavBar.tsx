import { HStack } from "@chakra-ui/layout";
import AuthButtons from "./AuthButtons";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack padding="12px" justify="space-between">
      <ColorModeSwitch />
      <AuthButtons />
    </HStack>
  );
}

export default NavBar;
