import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MovieList from './components/MovieList';
import { ChakraProvider, Box, Input, Button } from '@chakra-ui/react';

function App() {
  const [query, setQuery] = useState('');

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Box p={4}>
          <Input
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button mt={2} onClick={() => setQuery(query)}>Search</Button>
          <MovieList query={query} />
        </Box>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
