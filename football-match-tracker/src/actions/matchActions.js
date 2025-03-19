export const FETCH_MATCHES_REQUEST = "FETCH_MATCHES_REQUEST";
export const FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS";
export const FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

import { fetchMatches } from "../api";

export const fetchMatchesRequest = () => ({ type: FETCH_MATCHES_REQUEST });
export const fetchMatchesSuccess = (matches) => ({ type: FETCH_MATCHES_SUCCESS, payload: matches });
export const fetchMatchesFailure = (error) => ({ type: FETCH_MATCHES_FAILURE, payload: error });
export const addToFavorites = (match) => ({ type: ADD_TO_FAVORITES, payload: match });

export const fetchAllMatches = () => async (dispatch) => {
  dispatch(fetchMatchesRequest());
  try {
    const data = await fetchMatches();
    dispatch(fetchMatchesSuccess(data.data));
  } catch (error) {
    dispatch(fetchMatchesFailure(error.message));
  }
};
