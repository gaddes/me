import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class Contact extends Component {
  goToUrl = url => {
    // Change the page to the URL associated with the button
    this.props.history.push(`/${url}`);
  }

  render() {
    return (
      <React.Fragment>
        <Header goToUrl={this.goToUrl} />
        <div className="contact">
          <p>CONTACT</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;