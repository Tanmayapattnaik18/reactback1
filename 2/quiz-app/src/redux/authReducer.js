import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, token: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, token: null, error: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
