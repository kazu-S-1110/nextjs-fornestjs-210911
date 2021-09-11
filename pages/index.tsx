import type { NextPage } from 'next';
import { Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Text
      bgGradient="linear(to-l, #7928CA,#FF0080)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold"
    >
      Welcome to Chakra UI
    </Text>
  );
};

export default Home;
