import type { NextPage } from 'next';
import { Text, Flex, Spinner, HStack } from '@chakra-ui/react';
import { useQueryBook } from '../src/hooks/useQueryBooks';
import React from 'react';
import { InputForm } from '../src/components/InputForm';
import moment from 'moment';
import Typed from 'react-typed';
import { BookGarageA } from '../src/components/BookGarageA';
import { BookGarageB } from '../src/components/BookGarageB';
import { BookGarageC } from '../src/components/BookGarageC';

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
      >
        <Typed strings={['OverView']} typeSpeed={100} />
      </Text>
      {/* {data?.map((book) => (
        <Text fontSize="lg" fontWeight="extrabold" key={book._id}>
          {book.title} : {book.model} :
          {moment(book.created_at).format('YYYY-MM-DD HH:mm:ss')}
        </Text>
      ))} */}
      {/* <BookGarageA data={data} /> */}
      {/* <BookGarageB books={data} /> */}
      <BookGarageC books={data} />
      <InputForm />
    </Flex>
  );
};

export default Home;
