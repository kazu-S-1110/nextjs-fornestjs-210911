import type { NextPage } from 'next';
import { Text, Flex, Spinner, HStack } from '@chakra-ui/react';
import { useQueryBook } from '../src/hooks/useQueryBooks';
import React from 'react';
import { InputForm } from '../src/components/InputForm';
import Typed from 'react-typed';
import { BookGarageC } from '../src/components/BookGarageC';
import { EditModal } from '../src/components/EditModal';

const Home: NextPage = () => {
  const { status, data } = useQueryBook();
  if (status === 'loading') {
    return (
      <HStack outline="1px" justifyContent="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </HStack>
    );
  }
  return (
    <Flex direction="column" p="10" bg="aliceblue">
      <Text
        alignSelf="center"
        bgGradient="linear(to-l, #b071eb,#ff4da6)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mb="5"
      >
        <Typed strings={['OverView']} typeSpeed={100} />
      </Text>
      <BookGarageC books={data} />
      <InputForm />
    </Flex>
  );
};

export default Home;
