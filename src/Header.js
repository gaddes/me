import React, { Component } from "react";
import "./header.scss";

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
        <a className="logo" onClick={() => this.props.goToUrl("home")}>
          <span className="logo__text -title">Matt Gaddes</span>
          <span className="logo__text -subtext">Front-end Developer</span>
        </a>
        <div className="links">
          {/* <button onClick={this.goToUrl('home')}>Home</button> */}
          <a className="link" onClick={() => this.props.goToUrl("home")}>
            Home
          </a>
          <a className="link" onClick={() => this.props.goToUrl("about")}>
            About
          </a>
          <a
            className="link -contact"
            onClick={() => this.props.goToUrl("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
