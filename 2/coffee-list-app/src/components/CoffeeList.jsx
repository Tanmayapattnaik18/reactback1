import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../redux/actions';
import { Box, SimpleGrid, Text, Image } from '@chakra-ui/react';

const CoffeeList = () => {
  const dispatch = useDispatch();
  const { coffeeList, error } = useSelector((state) => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={5} p={5}>
      {coffeeList.map((coffee) => (
        <Box key={coffee.id} border="1px" borderRadius="md" p={4}>
          <Image src={coffee.image} alt={coffee.name} boxSize="150px" />
          <Text fontWeight="bold">{coffee.name}</Text>
          <Text>Price: ₹{coffee.price}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CoffeeList;
