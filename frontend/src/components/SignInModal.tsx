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
import { type FormEvent, useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

function SignInModal({ open, onClose }: Props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("submitted");
  }

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
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={emailRef} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={passwordRef} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Sign in
              </Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignInModal;
