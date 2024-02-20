import { Box, HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.png"; // Like icons created by Freepik

interface Props {
  width?: string;
}

function SideMenu({ width }: Props) {
  const { colorMode } = useColorMode();

  return (
    <Box width={width} bg={colorMode === "light" ? "pink.50" : "gray.700"}>
      <HStack padding="12px">
        <Image boxSize="40px" src={logo} alt="Logo" />
      </HStack>
    </Box>
  );
}

export default SideMenu;
