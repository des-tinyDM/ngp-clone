import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import campaignLogo from "./nextgen.png";
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
        <nav className="drawer__navigation">
          <Link className="drawer__navigation-link" to="/campaign">
            Campaign Info
          </Link>
          <Link className="drawer__navigation-link" to="/events">
            Events
          </Link>
          <Link className="drawer__navigation-link" to="/volunteers">
            Volunteers
          </Link>
          <Link className="drawer__navigation-link" to="/contacts">
            Contacts
          </Link>
          <hr className="divider" />

          <Link className="drawer__navigation-link" to="/campaign">
            Phone Bank Scripts
          </Link>
          <Link className="drawer__navigation-link" to="/events">
            Campaign Goals
          </Link>
          <Link className="drawer__navigation-link" to="/contacts">
            Campaign Settings
          </Link>
        </nav>
      </div>
    );
  }
}

export default Drawer;
