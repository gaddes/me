import React, { Component } from "react";
import Header from "./Header";
import "./projects.scss";

export default class Projects extends Component {
  goToUrl = url => {
    // Change the page to the URL associated with the button
    this.props.history.push(`/${url}`);
  };

  render() {
    return (
      <React.Fragment>
        <Header goToUrl={this.goToUrl} />
        <div className="body projects">
          <p>PROJECTS</p>
        </div>
      </React.Fragment>
    );
  }
}
