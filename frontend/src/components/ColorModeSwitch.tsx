import { useColorMode } from "@chakra-ui/color-mode";
import { Switch } from "@chakra-ui/switch";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      colorScheme="pink"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    ></Switch>
  );
}

export default ColorModeSwitch;
