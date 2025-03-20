import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, FETCH_QUIZ_SUCCESS, NEXT_QUESTION, UPDATE_SCORE, RESET_QUIZ } from "./actionTypes";
import axios from "axios";


export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("https://reqres.in/api/login", { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: "Invalid credentials" });
  }
};

export const logoutUser = () => ({ type: LOGOUT });


export const fetchQuiz = () => async (dispatch) => {
  try {
    const res = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz");
    dispatch({ type: FETCH_QUIZ_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.error("Error fetching quiz", error);
  }
};

export const nextQuestion = () => ({ type: NEXT_QUESTION });

export const updateScore = (points) => ({ type: UPDATE_SCORE, payload: points });

export const resetQuiz = () => ({ type: RESET_QUIZ });
