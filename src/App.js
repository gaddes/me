import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import './_reset.scss';

// FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
library.add(faGithub);
library.add(faLinkedinIn);
library.add(faEnvelope);

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
