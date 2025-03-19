import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMatches } from '../actions/matchActions';
import MatchItem from './MatchItem';
import { Spinner, Box, Text } from '@chakra-ui/react';

function MatchList() {
  const dispatch = useDispatch();
  const { footballMatches, isLoading, isError } = useSelector((state) => state.matchData);

  useEffect(() => {
    dispatch(fetchAllMatches());
  }, [dispatch]);

  if (isLoading) return <Spinner />;
  if (isError) return <Text>Error loading matches</Text>;

  return (
    <Box>
      {footballMatches.map((match) => (
        <MatchItem key={match.id} match={match} />
      ))}
    </Box>
  );
}

export default MatchList;
