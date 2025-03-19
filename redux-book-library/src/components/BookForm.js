import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/bookActions';
import { Input, Button, VStack } from '@chakra-ui/react';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    if (title && author && genre) {
      dispatch(addBook({ id: Date.now(), title, author, genre, status: false }));
      setTitle('');
      setAuthor('');
      setGenre('');
    }
  };

  return (
    <VStack spacing={4}>
      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <Input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <Button onClick={handleAddBook} colorScheme="blue">Add Book</Button>
    </VStack>
  );
}

export default BookForm;
