import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-navbar-name-div">
        <h2 className="left-navbar-name">BEAUTY-SALON-NADIA</h2>
      </div>
      <div className="navbar">
        <ul className="nav-links">
          <li>
            {/* <NavLink to="/" activeClassName="active" exact> */}
            <NavLink style={{ textDecoration: "none" }} to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/Services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/About">
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div> Signup/login</div>
    </div>
  );
};

export default Navbar;
