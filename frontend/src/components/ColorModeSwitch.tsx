import { useColorMode } from "@chakra-ui/color-mode";
import { Icon } from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { FiSun, FiMoon } from "react-icons/fi";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Icon as={FiSun} />
      <Switch
        colorScheme="pink"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Icon as={FiMoon} />
    </HStack>
  );
}

export default ColorModeSwitch;
