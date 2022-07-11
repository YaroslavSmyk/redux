import React from 'react';
import ThemedButton from './Header';
import { themes, ThemedContext } from './themes-conntext';
import Header from './Header';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };
  render() {
    return (
      <div className="page">
        <ThemedContext.Provider value={this.state.userData}>
          <Header />
        </ThemedContext.Provider>
      </div>
    );
  }
}
App.contextType = ThemedContext;

export default App;
