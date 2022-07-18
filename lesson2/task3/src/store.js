import { createStore } from 'redux';
import userReduscer from './users.reduser';

const store = createStore(userReduscer);

export default store;
