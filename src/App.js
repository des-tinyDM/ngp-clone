import React, { Component } from "react";
import logo from "./logo.svg";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import "./App.scss";
import AlertWidget from "./components/AlertWidget";
import CampaignChooserWidget from "./components/CampaignChooserWidget";

class App extends Component {
  state = {
    menuOpen: false,
    alertsOpen: false,
    campaignChooserOpen: false,
    isAdmin: true
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
    console.log(this.state);
    return (
      <div className="App">
        <Header
          menuOpen={menuOpen}
          menuClick={this.onMenuClick}
          chooserClick={this.onCampaignChooserClick}
          alertsClick={this.onAlertsClick}
        />
        {menuOpen && <Drawer />}
        {alertsOpen && <AlertWidget small={campaignChooserOpen} />}
        {campaignChooserOpen && <CampaignChooserWidget small={alertsOpen} />}
        <div className="dashboard" />
      </div>
    );
  }
}

export default App;
