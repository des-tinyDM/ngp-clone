import React, { Component } from "react";

class AlertWidget extends Component {
  render() {
    return (
      <div
        className={`alert-widget alert-widget${this.props.small && "--small"}`}
      >
        Alert
      </div>
    );
  }
}

export default AlertWidget;
