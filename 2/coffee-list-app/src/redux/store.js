import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import coffeeReducer from './reducer';

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
