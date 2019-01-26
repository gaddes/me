import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  componentDidUpdate() {
    console.log('Header updated!');
  }

  componentDidMount() {
    console.log('Header did mount!');
  }

  render() {
    return (
      <div className='header'>
        <Link className='logo' to='/home'>
          <span className='logo__text -title'>Matt Gaddes</span>
          <span className='logo__text -subtext'>Software Engineer</span>
        </Link>
        <div className='links'>
          <Link to='/projects' className='link'>
            Projects
          </Link>
          <Link to='/tech' className='link'>
            Tech
          </Link>
          <Link to='/contact' className='link -contact'>
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
