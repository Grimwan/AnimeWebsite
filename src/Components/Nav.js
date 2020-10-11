import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
export class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="NavOne" style={customNavOne}>
          <ul className="nav-links" style={customLink}>
            <Link to="/About" style={navstyle}>
              <li>About</li>
            </Link>
            <Link to="/Database" style={navstyle}>
              <li>Database</li>
            </Link>
            <Link to="/" style={navstyle}>
              <li>Home</li>
            </Link>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
const navstyle = {
  //background: "#000000",
  color: "#7454AB",
  fontSize: "30px",
};
const customNavOne = {
  display: " flex",
  justifyContent: "space-around",
  alignItems: "center",
  minHeight: "10vh",
  background: "#ab7454",
  color: "white",
};
const customLink = {
  width: "50%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",
};

export default Nav;
