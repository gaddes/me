import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import './_reset.scss';

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
