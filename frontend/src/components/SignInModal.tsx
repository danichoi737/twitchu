import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

function SignInModal({ open, onClose }: Props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={emailRef}
        closeOnOverlayClick={false}
        isOpen={open}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input ref={emailRef} placeholder="Email" type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input ref={passwordRef} placeholder="Password" type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Sign in
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignInModal;
