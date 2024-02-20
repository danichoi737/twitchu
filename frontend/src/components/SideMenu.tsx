import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png"; // Like icons created by Freepik

interface Props {
  width?: string;
}

function SideMenu({ width }: Props) {
  return (
    <Box width={width}>
      <HStack padding="12px">
        <Image boxSize="40px" src={logo} alt="Logo" />
      </HStack>
    </Box>
  );
}

export default SideMenu;
