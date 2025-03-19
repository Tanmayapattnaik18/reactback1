import {
    FETCH_MATCHES_REQUEST,
    FETCH_MATCHES_SUCCESS,
    FETCH_MATCHES_FAILURE,
    ADD_TO_FAVORITES,
  } from "../actions/matchActions";
  
  const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: [],
    favorites: [],
  };
  
  const matchReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MATCHES_REQUEST:
        return { ...state, isLoading: true, isError: false };
      case FETCH_MATCHES_SUCCESS:
        return { ...state, isLoading: false, footballMatches: action.payload };
      case FETCH_MATCHES_FAILURE:
        return { ...state, isLoading: false, isError: true };
      case ADD_TO_FAVORITES:
        return { ...state, favorites: [...state.favorites, action.payload] };
      default:
        return state;
    }
  };
  
  export default matchReducer;
  