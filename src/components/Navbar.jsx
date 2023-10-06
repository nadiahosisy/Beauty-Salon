import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    textDecoration: "none",
    fontFamily: "Monserat-ligth, sans-serif",
    color: "#212121",
    fontSize: "18px",
  };
  return (
    <div className="main-navbar-container">
      <div className="navbar-container">
        <div className="navbar-container-div-left">
          <div className="left-navbar-name-div">
            <h2 className="left-navbar-name">BEAUTY-SALON-NADIA</h2>
          </div>
        </div>
        <div className="navbar-container-div-right">
          <div className="navbar">
            <ul className="nav-links">
              <li>
                {/* <NavLink to="/" activeClassName="active" exact> */}
                <NavLink style={navStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/Services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/About">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-btn-div">
            <div className="signup-div">
              <button className="btn-signup">Sign Up</button>
            </div>
            <div className="login-div">
              <button className="btn-login">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
