import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import userReducer from './users.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
