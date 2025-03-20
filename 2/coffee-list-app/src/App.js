import React from 'react';
import CoffeeList from './components/CoffeeList';
import Sidebar from './components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1">
        <CoffeeList />
      </Box>
    </Flex>
  );
}

export default App;
