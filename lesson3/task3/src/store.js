import { createStore, combineReducers } from './redux';
import { userReduser } from './user.reducer';
import { cartReducer } from './cart.reducer';
import { languageReducer } from './language.reducer';

const appReducer = combineReducers({
  user: userReduser,
  cart: cartReducer,
  language: languageReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
