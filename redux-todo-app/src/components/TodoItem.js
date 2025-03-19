import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import { Checkbox, Text, Button, Flex } from '@chakra-ui/react';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <Flex justify="space-between" align="center">
      <Checkbox isChecked={todo.status} onChange={() => dispatch(toggleTodo(todo.id))}>
        <Text as={todo.status ? 's' : ''}>{todo.title}</Text>
      </Checkbox>
      <Button onClick={() => dispatch(deleteTodo(todo.id))} colorScheme="red" size="sm">Delete</Button>
    </Flex>
  );
}

export default TodoItem;
