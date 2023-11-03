import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const navStyle = {
    textDecoration: "none",
    fontFamily: "Monserat-ligth, sans-serif",
    color: "#212121",
    fontSize: "18px",
  };
  const goToSignUp = () => {
    navigate("/SignUp");
  };
  const goToLogIn = () => {
    navigate("/LogIn");
  };

  const showUser = () => {
    console.log(currentUser);
  };

  const handleLogout = () => {
    console.log("HEY");
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
          {currentUser ? (
            <>
              <span>
                {currentUser}
                <span
                  style={{
                    color: "red",
                    margin: "0px 20px",
                    cursor: "pointer",
                  }}
                  onClick={handleLogout}
                >
                  Log out
                </span>
              </span>
            </>
          ) : (
            <div className="nav-btn-div">
              <div className="signup-div">
                <button onClick={goToSignUp} className="btn-signup">
                  Sign Up
                </button>
              </div>
              <div className="login-div">
                <button onClick={goToLogIn} className="btn-login">
                  Log In
                </button>
                <button onClick={showUser} className="btn-show-user">
                  showUser
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
