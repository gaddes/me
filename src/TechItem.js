import React, { Component } from "react";
import "./techItem.scss";

// Image imports - require() required for webpack
const react_logo = require("./images/logo_react.png");
const sass_logo = require("./images/logo_SASS.png");

const logoArray = [react_logo, sass_logo];

const array = logoArray.map(function(name) {
  return <p>{name}</p>;
});
// var Hello = React.createClass({
//   render: function() {
//     var names = ["Jake", "Jon", "Thruster"];
//     var namesList = names.map(function(name) {
//       return <li>{name}</li>;
//     });
//     return <ul>{namesList}</ul>;
//   }
// });

export default class TechItem extends Component {
  render() {
    return (
      <div className="item">
        <div className="logo-container">
          <img className="logo" src={react_logo} alt="react logo" />
        </div>
        <span className="heading">TITLE</span>
        <span className="description">description here</span>
        <div>{array}</div>
      </div>
    );
  }
}
