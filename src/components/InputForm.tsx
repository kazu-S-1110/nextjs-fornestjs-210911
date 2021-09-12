import { useForm } from 'react-hook-form';
import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import { useMutationBook } from '../hooks/useMutationBooks';

export const InputForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { createBookMutation } = useMutationBook();

  const onSubmit = (values) => {
    createBookMutation.mutate(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel colorScheme="cyan" htmlFor="title">
          BookTitle
        </FormLabel>
        <Input
          id="title"
          placeholder="Book Title"
          {...register('title', {
            required: 'This is required',
          })}
        />
        <FormLabel colorScheme="cyan" htmlFor="model">
          model
        </FormLabel>
        <Input
          id="model"
          placeholder="Book model"
          {...register('model', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
