import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';

function MovieItem({ movie }) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
      <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <Text fontSize="lg">{movie.title}</Text>
      <Text>Release Date: {movie.release_date}</Text>
      <Button colorScheme="blue">Add to Watchlist</Button>
    </Box>
  );
}

export default MovieItem;
