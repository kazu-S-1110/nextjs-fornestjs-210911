/* eslint-disable react/no-children-prop */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  InputLeftAddon,
  InputGroup,
} from '@chakra-ui/react';
import React from 'react';

export const EditModal = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftAddon children="id" />
              <Input value={data._id} />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="title" />
              <Input value={data.title} />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="model" />
              <Input value={data.model} />
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
