import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <p>HEADER</p>
        <div className="buttons">
          {/* <button onClick={this.goToUrl('home')}>Home</button> */}
          <button onClick={() => this.props.goToUrl('home')}>Home</button>
          <button onClick={() => this.props.goToUrl('about')}>About</button>
          <button onClick={() => this.props.goToUrl('contact')}>Contact</button>
        </div>
      </div>
    );
  }
}

export default Header;
