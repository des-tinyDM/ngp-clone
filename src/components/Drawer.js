import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import campaignLogo from "./nextgen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="drawer">
        <span className="drawer__close" onClick={() => this.props.menuClick()}>
          <i class="fas fa-times" />
        </span>
        <header className={`drawer__header ${this.props.background}`}>
          {/* <span>
            <img src={campaignLogo} />
          </span> */}
          <h2>Destiny Ross</h2>
          <h3>NextGen Climate</h3>
          <h5>Admin</h5>
        </header>
        <nav className={`drawer__navigation`}>
          <Link
            className={`drawer__navigation-link text-${this.props.background}`}
            to="/campaign"
          >
            <span className="drawer__navigation-icon">
              <FontAwesomeIcon icon={["fas", "info"]} />
            </span>
            <p>Campaign Info</p>
          </Link>
          <Link
            className={`drawer__navigation-link text-${this.props.background}`}
            to="/events"
          >
            <span className="drawer__navigation-icon">
              <FontAwesomeIcon icon={["fas", "calendar"]} />
            </span>
            <p>Events</p>
          </Link>
          <Link
            className={`drawer__navigation-link text-${this.props.background}`}
            to="/volunteers"
          >
            <span className="drawer__navigation-icon">
              <FontAwesomeIcon icon={["fas", "users"]} />
            </span>
            <p>Volunteers</p>
          </Link>
          <Link
            className={`drawer__navigation-link text-${this.props.background}`}
            to="/contacts"
          >
            <span className="drawer__navigation-icon">
              <FontAwesomeIcon
                icon={["fas", "user-plus"]}
                className={`text-${this.props.background}`}
              />
            </span>
            <p>Contacts</p>
          </Link>
          <hr className="divider" />

          <Link
            className={`drawer__navigation-link text-${this.props.background}`}
            to="/phonebank"
          >
            <span className="drawer__navigation-icon">
              <FontAwesomeIcon
                icon={["fas", "headset"]}
                className={`text-${this.props.background}`}
              />
            </span>
            <p>Phone Bank Scripts</p>
          </Link>
          <Link
            className={`drawer__navigation-link text-${this.props.background}`}
            to="/goals"
          >
            <span className="drawer__navigation-icon">
              <FontAwesomeIcon icon={["fas", "chart-line"]} />
            </span>
            <p>Campaign Goals</p>
          </Link>
          <Link
            className={`drawer__navigation-link text-${this.props.background}`}
            to="/settings"
          >
            <span className="drawer__navigation-icon">
              <FontAwesomeIcon icon={["fas", "cogs"]} />
            </span>
            <p>Campaign Settings</p>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Drawer;
