import store from './store';
import { addUser, deleteUser } from './user.actions';

store.subscribe(() => {
  console.log(store.getState);
});

store.dispatch(addUser({ id: 2, name: 'Yaroslav' }));
store.dispatch(deleteUser(2));
store.dispatch(addUser({ id: 3, name: 'Joe' }));
store.dispatch(addUser({ id: 5, name: 'Vasya' }));


