import { FETCH_COFFEE_SUCCESS, FETCH_COFFEE_FAILURE, SORT_COFFEE } from './actionTypes';

const initialState = {
  coffeeList: [],
  error: null,
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COFFEE_SUCCESS:
      return { ...state, coffeeList: action.payload, error: null };
    case FETCH_COFFEE_FAILURE:
      return { ...state, error: action.payload };
    case SORT_COFFEE:
      return {
        ...state,
        coffeeList: [...state.coffeeList].sort((a, b) =>
          action.payload === 'asc' ? a.price - b.price : b.price - a.price
        ),
      };
    default:
      return state;
  }
};

export default coffeeReducer;
