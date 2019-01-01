import React, { Component } from "react";

class Header extends Component {
  componentDidUpdate() {
    console.log("Header updated!");
  }

  componentDidMount() {
    console.log("Header did mount!");
  }

  render() {
    return (
      <div className="header">
        <p>HEADER</p>
        <div className="buttons">
          {/* <button onClick={this.goToUrl('home')}>Home</button> */}
          <button onClick={() => this.props.goToUrl("home")}>Home</button>
          <button onClick={() => this.props.goToUrl("about")}>About</button>
          <button onClick={() => this.props.goToUrl("contact")}>Contact</button>
        </div>
      </div>
    );
  }
}

export default Header;
