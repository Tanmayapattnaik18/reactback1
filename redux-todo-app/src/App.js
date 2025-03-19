import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Todo List with Redux</Text>
      <TodoForm />
      <TodoList />
    </Box>
  );
}

export default App;
