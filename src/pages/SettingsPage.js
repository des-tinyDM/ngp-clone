import React, { Component } from "react";
import { CirclePicker } from "react-color";

import { connect } from "react-redux";

import { updateColorScheme } from "../ducks/settingsReducer";

class SettingsPage extends Component {
  state = {
    color: ""
  };
  handleColorChange = ({ hex }) => {
    console.log(hex);
    this.setState({ color: hex });
    let backgroundClass;
    switch (hex) {
      case "#f44336":
        backgroundClass = "red";
        break;
      case "#e91e63":
        backgroundClass = "magenta";
        break;
      case "#9c27b0":
        backgroundClass = "purple";
        break;
      case "#673ab7":
        backgroundClass = "darkpurple";
        break;
      case "#3f51b5":
        backgroundClass = "navy";
        break;
      case "#2196f3":
        backgroundClass = "skyblue";
        break;
      case "#03a9f4":
        backgroundClass = "lightblue";
        break;
      case "#00bcd4":
        backgroundClass = "torquoise";
        break;
      case "#009688":
        backgroundClass = "darkgreen";
        break;
      case "#4caf50":
        backgroundClass = "green";
        break;
      case "##8bc34a":
        backgroundClass = "lightgreen";
        break;
      default:
        backgroundClass = "";
    }
    console.log(backgroundClass);
    this.props.updateColorScheme(backgroundClass);
  };
  render() {
    console.log(this.state);
    return (
      <div className="page">
        <h1>Settings</h1>
        <h2>Color Scheme</h2>
        <CirclePicker onChangeComplete={this.handleColorChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.settingsReducer.color
  };
};

export default connect(
  mapStateToProps,
  { updateColorScheme }
)(SettingsPage);
