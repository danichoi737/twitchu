import { FieldValues, useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm();

  function onSubmit(data: FieldValues) {
    axios
      .post("http://127.0.0.1:8000/signin", data)
      .then((res) => console.log(res))
      .catch((err) => console.error("axios error: ", err))
      .finally(() => console.log("submitted"));
  }

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")} />
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
