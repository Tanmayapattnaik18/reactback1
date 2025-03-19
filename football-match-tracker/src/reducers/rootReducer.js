import { combineReducers } from "redux";
import matchReducer from "./matchReducer";

const rootReducer = combineReducers({
  matchData: matchReducer,
});

export default rootReducer;
