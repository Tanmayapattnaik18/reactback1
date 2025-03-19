import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
  } from "../actions/movieActions";
  
  const initialState = {
    isLoading: false,
    isError: false,
    movies: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return { ...state, isLoading: true, isError: false };
      case FETCH_MOVIES_SUCCESS:
        return { ...state, isLoading: false, movies: action.payload };
      case FETCH_MOVIES_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  