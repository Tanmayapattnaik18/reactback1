import { FETCH_QUIZ_SUCCESS, NEXT_QUESTION, UPDATE_SCORE, RESET_QUIZ } from "./actionTypes";

const initialState = {
  questions: [],
  currentIndex: 0,
  score: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_SUCCESS:
      return { ...state, questions: action.payload, currentIndex: 0, score: 0 };
    case NEXT_QUESTION:
      return { ...state, currentIndex: state.currentIndex + 1 };
    case UPDATE_SCORE:
      return { ...state, score: state.score + action.payload };
    case RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
};

export default quizReducer;
