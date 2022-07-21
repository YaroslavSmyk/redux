import { removeProduct, addProduct } from './cart.actions';
import store from './store';
import { removeUser, setUser } from './user.actions';
import { setLanguage } from './language.actions';
import redux from 'redux'


store.subscribe(() => console.log(store.getState()));


store.dispatch(addProduct({id: 1, name: 'Bread'}))
store.dispatch(setLanguage('ua'))