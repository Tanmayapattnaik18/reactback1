import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MatchList from './components/MatchList';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Box p={4}>
          <Heading>Football Match Tracker</Heading>
          <MatchList />
        </Box>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
