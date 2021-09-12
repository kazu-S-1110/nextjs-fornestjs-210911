import type { NextPage } from 'next';
import { Text, Flex, Spinner, HStack } from '@chakra-ui/react';
import { useQueryBook } from '../src/hooks/useQueryBooks';
import React from 'react';
import { InputForm } from '../src/components/InputForm';
import moment from 'moment';

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
    <Flex direction="column" alignItems="center">
      {data?.map((book) => (
        <Text
          bgGradient="linear(to-l, #140027,#752b50)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
          key={book._id}
        >
          {book.title} : {book.model} :
          {moment(book.created_at).format('YYYY-MM-DD HH:mm:ss')}
        </Text>
      ))}
      <InputForm />
    </Flex>
  );
};

export default Home;
