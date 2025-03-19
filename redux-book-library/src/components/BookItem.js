import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook, toggleRead } from '../actions/bookActions';
import { Box, Text, Button, Checkbox, Flex } from '@chakra-ui/react';

function BookItem({ book }) {
  const dispatch = useDispatch();

  return (
    <Box p={3} borderWidth={1} borderRadius="lg">
      <Flex justifyContent="space-between" alignItems="center">
        <Checkbox isChecked={book.status} onChange={() => dispatch(toggleRead(book.id))}>
          <Text>{book.title} by {book.author} - {book.genre}</Text>
        </Checkbox>
        <Button onClick={() => dispatch(deleteBook(book.id))} colorScheme="red" size="sm">Delete</Button>
      </Flex>
    </Box>
  );
}

export default BookItem;
