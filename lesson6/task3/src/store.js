import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import weatherReducer from './weather/weather.reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  weatherData: weatherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
