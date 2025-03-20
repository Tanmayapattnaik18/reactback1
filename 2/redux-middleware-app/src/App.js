import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'CUSTOM_ACTION', payload: { message: 'Hello from App' } })}>Custom Action</button>
    </div>
  );
}

export default App;
