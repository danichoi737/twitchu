import { type FormEvent, useRef } from "react";
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
import axios from "axios";

interface Props {
  open: boolean;
  onClose: () => void;
}

function SignInModal({ open, onClose }: Props) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const bodyData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    axios
      .post("http://127.0.0.1:8000/signin", bodyData)
      .then((res) => console.log(res))
      .catch((err) => console.error("axios error: ", err))
      .finally(() => console.log("submitted"));
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
                <Input name="email" type="email" ref={emailRef} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" ref={passwordRef} />
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
