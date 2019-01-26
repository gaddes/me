import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const myFace = require('./images/me.jpg');

class Home extends Component {
  render() {
    return (
      <div className='body home'>
        <div className='overlay-light'>
          <p className='title'>Hi, I'm Matt!</p>
          <p className='subtitle'>A software engineer based in Newcastle-upon-Tyne</p>
          <div className='myface-wrapper'>
            <img src={myFace} className='myface' alt="Matt's face" />
          </div>
          <div className='contact-icons'>
            <a className='icon' href='https://github.com/gaddes'>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a
              className='icon'
              href='https://www.linkedin.com/in/matthew-gaddes-30ba65b4/'
            >
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a className='icon' href='mailto:matthew.gaddes@gmail.com'>
              <FontAwesomeIcon icon={['far', 'envelope']} />
            </a>
          </div>
          <div className='button-wrapper'>
            <Link to='/contact' className='link'>
              Contact me!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
