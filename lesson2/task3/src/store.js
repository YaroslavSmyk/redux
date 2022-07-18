import { createStore } from 'redux';
import userReducer from './users.reduser';

const store = createStore(userReducer);

export default store;
