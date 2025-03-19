import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../actions/matchActions';
import { Box, Button, Text } from '@chakra-ui/react';

function MatchItem({ match }) {
  const dispatch = useDispatch();

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
      <Text fontSize="lg">{match.team1} vs {match.team2}</Text>
      <Text>Date: {match.date}</Text>
      <Text>Venue: {match.venue}</Text>
      <Button colorScheme="blue" onClick={() => dispatch(addToFavorites(match))}>Add to Favorites</Button>
    </Box>
  );
}

export default MatchItem;
