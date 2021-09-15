import { useForm } from 'react-hook-form';
import React from 'react';
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useMutationBook } from '../hooks/useMutationBooks';

export const InputForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm();
  const { createBookMutation } = useMutationBook();

  const onSubmit = (values) => {
    createBookMutation.mutate(values);
    reset();
    setFocus('title');
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="facebook">
        Add record
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <InputGroup alignItems="center" mb="3">
                  <InputLeftAddon colorScheme="cyan" htmlFor="title">
                    BookTitle
                  </InputLeftAddon>
                  <Input
                    id="title"
                    placeholder="Book Title"
                    {...register('title', {
                      required: 'This is required',
                    })}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon colorScheme="cyan" htmlFor="model">
                    model
                  </InputLeftAddon>
                  <Input
                    id="model"
                    placeholder="Book model"
                    {...register('model', {
                      required: 'This is required',
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <ModalFooter>
                <Button
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
