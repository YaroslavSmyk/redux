import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import userReducer from './users.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(appReducer);

export default store;
