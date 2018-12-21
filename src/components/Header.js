import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

import userImg from "./me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`${this.props.background} ${
          this.props.menuOpen ? "header header--narrow" : "header"
        }`}
      >
        <section className="header__section--left header__section">
          <FontAwesomeIcon
            icon={["fas", "bars"]}
            className="header__menu navLink"
            onClick={() => this.props.menuClick()}
            title="Open the menu"
          />

          <span title="Navigate to the home page">Grassroots</span>
        </section>
        <section className="header__section--right header__section">
          <FontAwesomeIcon
            icon={["fas", "th"]}
            className="navLink"
            onClick={() => this.props.chooserClick()}
            title="Switch active campaign"
          />

          <FontAwesomeIcon
            icon={["fas", "bell"]}
            className="navLink"
            onClick={() => this.props.alertsClick()}
            title="Open the alerts widget"
          />
          <Link to="/settings">
            <FontAwesomeIcon
              icon={["fas", "cogs"]}
              className="navLink"
              title="Navigate to the Settings Page"
            />{" "}
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
