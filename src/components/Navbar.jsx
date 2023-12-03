import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuthGlobalContext } from "../context/AuthProvider";
import { useDarkMode } from "../context/DarkModeProvider";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const Navbar = () => {
  const { currentUser, logout } = useAuthGlobalContext();

  const { isDarkMode, toggleDarkMode } = useDarkMode();
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
    navigate("/user-page");
  };

  useEffect(() => {}, [currentUser]);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <div className="main-navbar-container">
      <div className="navbar-container">
        <div className="navbar-container-div-left">
          <div className="navbar-container-div-left-click-to-darkmode-div">
            {isDarkMode ? (
              <p className="navbar-container-div-left-click-to-darkmode-p">
                Dark Mode{" "}
              </p>
            ) : (
              <p className="navbar-container-div-left-click-to-darkmode-p">
                Light Mode{" "}
              </p>
            )}
          </div>
          <DarkModeSwitch
            className="dark-mode-toggle"
            moonColor="#0d6efd"
            sunColor="#e65032"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={35}
            animationProperties={{
              springConfig: { mass: 7, tension: 250, friction: 40 },
              light: {
                circle: {
                  r: 5,
                },
                mask: {
                  cx: "100%",
                  cy: "0%",
                },
                svg: {
                  transform: "rotate(120deg)",
                },
                lines: {
                  opacity: 1,
                },
              },
            }}
          />
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
                <NavLink style={navStyle} to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/about">
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
