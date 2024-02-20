import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import SignInModal from "./SignInModal";

function AuthButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <HStack>
      <Button colorScheme="pink" variant="outline" onClick={openModal}>
        Sign in
      </Button>
      <SignInModal open={isModalOpen} onClose={closeModal} />
      <Button colorScheme="pink">Sign up</Button>
    </HStack>
  );
}

export default AuthButtons;
