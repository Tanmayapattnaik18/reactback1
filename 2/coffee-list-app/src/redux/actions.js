import axios from 'axios';
import { FETCH_COFFEE_SUCCESS, FETCH_COFFEE_FAILURE, SORT_COFFEE } from './actionTypes';

export const fetchCoffee = (sortOrder = 'asc') => async (dispatch) => {
  try {
    const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=${sortOrder}`);
    dispatch({ type: FETCH_COFFEE_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: FETCH_COFFEE_FAILURE, payload: error.message });
  }
};

export const sortCoffee = (order) => ({
  type: SORT_COFFEE,
  payload: order,
});
