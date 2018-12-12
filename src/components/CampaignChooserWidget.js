import React, { Component } from "react";

class CampaignChooserWidget extends Component {
  render() {
    return (
      <div
        className={`campaign-chooser-widget campaign-chooser-widget${this.props
          .small && "--small"}`}
      >
        CampaignChooser
      </div>
    );
  }
}

export default CampaignChooserWidget;
