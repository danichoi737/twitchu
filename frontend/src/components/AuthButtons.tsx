import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import SignInModal from "./SignInModal";
import { SignUpModal } from "./SignUpModal";

function AuthButtons() {
  const [signInModal, setSignInModalOpen] = useState(false);
  const [signUpModal, setSignUpModalOpen] = useState(false);

  return (
    <HStack>
      <Button colorScheme="pink" variant="outline" onClick={() => setSignInModalOpen(true)}>
        Sign in
      </Button>
      <SignInModal open={signInModal} onClose={() => setSignInModalOpen(false)} />
      <Button colorScheme="pink" onClick={() => setSignUpModalOpen(true)}>
        Sign up
      </Button>
      <SignUpModal open={signUpModal} onClose={() => setSignUpModalOpen(false)} />
    </HStack>
  );
}

export default AuthButtons;
