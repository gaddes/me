import React, { Component } from 'react';
import './home.scss';
const myFace = require('./images/me.jpg');

class Home extends Component {
  render() {
    return (
      <div className='body home'>
        <div className='overlay-light'>
          <p className='title'>Hi, I'm Matt!</p>
          <p className='subtext'>
            A Web Developer based in Newcastle-upon-Tyne
          </p>
          <div className='myface-wrapper'>
            <img src={myFace} className='myface' alt="Matt's face" />
          </div>
          <p className='text'>HOME</p>
        </div>
      </div>
    );
  }
}

export default Home;
