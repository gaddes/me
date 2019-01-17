import React, { Component } from 'react';
import Header from './Header';
import './contact.scss';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='body contact'>
          <div className='overlay-light'>
            <p>Send me an email by clicking the link below</p>
            <div className='button-wrapper'>
              <a href='mailto:matthew.gaddes@gmail.com' className='link'>
                Send email!
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
