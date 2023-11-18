import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuthGlobalContext } from "../context/AuthProvider";

const Navbar = () => {
  const { currentUser, logout } = useAuthGlobalContext();
  const navigate = useNavigate();
  const navStyle = {
    textDecoration: "none",
    fontFamily: "Monserat-ligth, sans-serif",
    color: "#212121",
    fontSize: "18px",
  };

  const goToLogIn = () => {
    navigate("/LogIn");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navigateToUserPage = () => {
    navigate("/userPage");
  };

  useEffect(() => {}, [currentUser]);

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
                <NavLink style={navStyle} to="/">
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
            {currentUser && (
              <div className="current-user-div">
                <a className="current-user-anchor" onClick={navigateToUserPage}>
                  <h2 className="current-user-paragraph">
                    {currentUser.email}
                  </h2>
                </a>
              </div>
            )}

            <div className="login-div">
              {currentUser ? (
                <button onClick={handleLogout} className="btn-login">
                  Log Out
                </button>
              ) : (
                <>
                  <button onClick={goToLogIn} className="btn-login">
                    Log In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
