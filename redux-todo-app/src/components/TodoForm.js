import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import { Input, Button, Flex } from '@chakra-ui/react';

function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <Flex mb={4}>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
        mr={2}
      />
      <Button onClick={handleAddTodo} colorScheme="blue">Add Todo</Button>
    </Flex>
  );
}

export default TodoForm;
