import React, { Component } from "react";
import logo from "./logo.svg";
import { withRouter } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import "./scss/App.scss";
import AlertWidget from "./components/AlertWidget";
import CampaignChooserWidget from "./components/CampaignChooserWidget";
import { Main } from "./routes";
import { connect } from "react-redux";

import { updateColorScheme } from "./ducks/settingsReducer";

class App extends Component {
  state = {
    menuOpen: false,
    alertsOpen: false,
    campaignChooserOpen: false,
    isAdmin: true,
    color: ""
  };

  componentDidMount() {
    this.setState({ color: this.props.color });
  }
  onColorSchemeChange = className => {
    this.setState({ color: className });
  };
  onMenuClick = e => {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }));
  };

  onCampaignChooserClick = e => {
    this.setState(({ campaignChooserOpen }) => ({
      campaignChooserOpen: !campaignChooserOpen
    }));
  };
  onAlertsClick = e => {
    this.setState(({ alertsOpen }) => ({
      alertsOpen: !alertsOpen
    }));
  };
  render() {
    const { menuOpen, alertsOpen, campaignChooserOpen } = this.state;
    console.log(this.props);
    return (
      <div className="App">
        <Header
          background={this.props.color}
          menuOpen={menuOpen}
          menuClick={this.onMenuClick}
          chooserClick={this.onCampaignChooserClick}
          alertsClick={this.onAlertsClick}
        />
        {menuOpen && (
          <Drawer background={this.props.color} menuClick={this.onMenuClick} />
        )}
        {alertsOpen && <AlertWidget small={campaignChooserOpen} />}
        {campaignChooserOpen && <CampaignChooserWidget small={alertsOpen} />}
        <div className={`${menuOpen ? "dashboard min" : "dashboard"}`}>
          {Main}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.settingsReducer.color
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { updateColorScheme }
  )(App)
);
