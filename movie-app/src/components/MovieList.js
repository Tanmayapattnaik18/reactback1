import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../actions/movieActions';
import MovieItem from './MovieItem';
import { Spinner, Box, Text } from '@chakra-ui/react';

function MovieList({ query }) {
  const dispatch = useDispatch();
  const { movies, isLoading, isError } = useSelector((state) => state.movieData);

  useEffect(() => {
    dispatch(searchMovies(query));
  }, [dispatch, query]);

  if (isLoading) return <Spinner />;
  if (isError) return <Text>Error loading movies</Text>;

  return (
    <Box>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Box>
  );
}

export default MovieList;
