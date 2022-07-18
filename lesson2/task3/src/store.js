import { createStore } from 'redux';
import userReduscer from './user.reduser';

const store = createStore(userReduscer);

export default store;
