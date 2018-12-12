import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

import userImg from "./me.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`${
          this.props.menuOpen ? "header header--narrow" : "header"
        }`}
      >
        <section className="header__section--left header__section">
          <i
            onClick={() => this.props.menuClick()}
            className="header__menu fa fa-bars navLink"
            title="Open the menu"
          />
          <span title="Navigate to the home page">Grassroots</span>
        </section>
        <section className="header__section--right header__section">
          <i
            className="navLink fas fa-th"
            onClick={() => this.props.chooserClick()}
            title="Switch active campaign"
          />
          <i
            className="navLink fa fa-bell"
            onClick={() => this.props.alertsClick()}
            title="Open the alerts widget"
          />
          <Link to="/settings">
            <i className="navLink fas fa-cogs" title="Open the settings page" />
          </Link>
          <div className="header__user-info" title="Edit and view your profile">
            <div className="header__user-info--left">
              <span className="header__user-info--name">Destiny Ross</span>
              <span className="header__user-info--campaign">
                NextGen Climate
              </span>
            </div>
            <img className="header__user-info--img" src={userImg} />
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
