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
        <span className="logo" onClick={() => this.props.goToUrl("home")}>
          <span className="logo__text -title">Matt Gaddes</span>
          <span className="logo__text -subtext">Front-end Developer</span>
        </span>
        <div className="links">
          {/* <button onClick={this.goToUrl('home')}>Home</button> */}
          <button
            className="link"
            onClick={() => this.props.goToUrl("projects")}
          >
            Projects
          </button>
          <button className="link" onClick={() => this.props.goToUrl("tech")}>
            Tech
          </button>
          <button
            className="link -contact"
            onClick={() => this.props.goToUrl("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
