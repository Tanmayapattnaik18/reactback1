import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import BookForm from './components/BookForm';
import BookItem from './components/BookItem';
import { useSelector } from 'react-redux';

function App() {
  const books = useSelector(state => state.books);

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Box p={5}>
          <Text fontSize="2xl" mb={4}>Book Library Management</Text>
          <BookForm />
          {books.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
