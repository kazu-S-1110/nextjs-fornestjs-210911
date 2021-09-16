import type { NextPage } from 'next';
import { Text, Flex, Spinner, HStack, Button, Spacer } from '@chakra-ui/react';
import { useQueryBook } from '../src/hooks/useQueryBooks';
import React from 'react';
import { InputForm } from '../src/components/InputForm';
import Typed from 'react-typed';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BookGarageC } from '../src/components/BookGarageC';
import 'react-tabs/style/react-tabs.css';

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
      <Tabs>
        <TabList>
          <Tab>Garage</Tab>
          <Tab>Setup</Tab>
        </TabList>

        <TabPanel>
          <HStack justifyContent="space-around">
            <Text
              alignSelf="center"
              bgGradient="linear(to-l, #b071eb,#ff4da6)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              mb="5"
              mr="10"
            >
              <Typed strings={['Book In Garage']} typeSpeed={50} />
            </Text>
            <InputForm />
          </HStack>
          <BookGarageC books={data} />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </Flex>
  );
};

export default Home;
