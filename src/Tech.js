import React, { Component } from 'react';
import Header from './Header';
import TechItem from './TechItem';
import './tech.scss';

class Tech extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='body tech'>
          <TechItem />
        </div>
      </React.Fragment>
    );
  }
}

export default Tech;
