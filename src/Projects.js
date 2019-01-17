import React, { Component } from 'react';
import Header from './Header';
import Project from './Project';
import './projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='body projects'>
          <Project />
        </div>
      </React.Fragment>
    );
  }
}
