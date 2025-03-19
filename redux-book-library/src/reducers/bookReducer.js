import { ADD_BOOK, DELETE_BOOK, TOGGLE_READ, EDIT_BOOK } from '../actions/bookActions';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter(book => book.id !== action.payload);
    case TOGGLE_READ:
      return state.map(book =>
        book.id === action.payload ? { ...book, status: !book.status } : book
      );
    case EDIT_BOOK:
      return state.map(book =>
        book.id === action.payload.id ? { ...action.payload } : book
      );
    default:
      return state;
  }
};

export default bookReducer;
