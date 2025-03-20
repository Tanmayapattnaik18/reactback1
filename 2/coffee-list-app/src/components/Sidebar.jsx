import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoffee, sortCoffee } from '../redux/actions';
import { Box, Button, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSort = (order) => {
    dispatch(fetchCoffee(order));
  };

  return (
    <Box p={5} w="200px">
      <VStack spacing={4}>
        <Button onClick={() => handleSort('asc')} colorScheme="blue">Sort by Price (Low to High)</Button>
        <Button onClick={() => handleSort('desc')} colorScheme="blue">Sort by Price (High to Low)</Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
