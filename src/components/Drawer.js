import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
// import { CirclePicker } from "react-color";
class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // handleColorChange = ({ hex }) => console.log(hex);
  render() {
    return (
      <div className="drawer">
        <header className="drawer__header">
          <h2>Destiny Ross</h2>
          <h3>NextGen Climate</h3>
          <h5>Admin</h5>
        </header>
        <nav className="drawer__navigation">
          <Link to="/campaign">Campaign Info</Link>
          <Link to="/events">Events</Link>
          <Link to="/volunteers">Volunteers</Link>
          <Link to="/contacts">Contacts</Link>
          <hr className="divider" />

          <Link to="/campaign">Phone Bank Scripts</Link>
          <Link to="/events">Events</Link>
          <Link to="/volunteers">Volunteers</Link>
          <Link to="/contacts">Campaign Settings</Link>
        </nav>
        {/* <CirclePicker onChangeComplete={this.handleColorChange} /> */}
      </div>
    );
  }
}

export default Drawer;
