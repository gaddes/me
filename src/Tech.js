import React, { Component } from "react";
import Header from "./Header";
import "./tech.scss";

class Tech extends Component {
  goToUrl = url => {
    // Change the page to the URL associated with the button
    this.props.history.push(`/${url}`);
  };

  render() {
    return (
      <React.Fragment>
        <Header goToUrl={this.goToUrl} />
        <div className="body tech">
          <p>TECH</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Tech;
