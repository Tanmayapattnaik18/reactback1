import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { List } from '@chakra-ui/react';

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <List spacing={3}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}

export default TodoList;
