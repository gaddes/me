import React, { Component } from 'react';
import Header from './Header';
import './contact.scss';

class Contact extends Component {
  // goToUrl = url => {
  //   // Change the page to the URL associated with the button
  //   this.props.history.push(`/${url}`);
  // };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='body contact'>
          <p>CONTACT</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
