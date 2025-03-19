export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

import { fetchMovies } from "../api";

export const fetchMoviesRequest = () => ({ type: FETCH_MOVIES_REQUEST });
export const fetchMoviesSuccess = (movies) => ({ type: FETCH_MOVIES_SUCCESS, payload: movies });
export const fetchMoviesFailure = (error) => ({ type: FETCH_MOVIES_FAILURE, payload: error });

export const searchMovies = (query) => async (dispatch) => {
  dispatch(fetchMoviesRequest());
  try {
    const data = await fetchMovies(query);
    dispatch(fetchMoviesSuccess(data.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
