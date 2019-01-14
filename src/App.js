import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
