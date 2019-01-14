import React, { Component } from 'react';
import Header from './Header';
import './projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='body projects'>
          <p>PROJECTS</p>
        </div>
      </React.Fragment>
    );
  }
}
