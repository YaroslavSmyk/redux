import React from 'react';
import { Provider } from 'react-redux';
import Users from './users/Users';
import store from './store';
import { render } from 'react-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};

export default App;
