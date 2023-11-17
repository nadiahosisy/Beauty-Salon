import React, { useState } from "react";
import { InputComponent } from "../components";
import { useNavigate } from "react-router-dom";
import { useAuthGlobalContext } from "../context/AuthProvider";

const Login = () => {
  const { login, isLoggedIn } = useAuthGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const logInClick = async () => {
    try {
      await login(username, password);
      window.localStorage.setItem("email", username);
      navigate("/UserPage");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="main-div-sign-up-page">
      <h2 className="header-register">Login</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <InputComponent
            label={"Username or email address *"}
            type={"text"}
            placeholder={"Enter your username or email address"}
            value={username}
            onChange={handleUsernameChange}
          />
          <InputComponent
            label={"Password *"}
            type={"password"}
            placeholder={"Enter your password"}
            value={password}
            onChange={handlePasswordChange}
          />

          <div className="label-input-div">
            <label className="label-register">
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <p className="paragraph-register">
            <a className="anchor-register" href="/forgot-password">
              Lost your password?
            </a>
          </p>
          <div className="sign-up-btn-div">
            <button onClick={logInClick} className="Button-register">
              Login
            </button>
          </div>
          {!isLoggedIn && (
            <p className="paragraph-sign-up">
              Dont have an account?
              <a className="anchor-register" href="/signUp">
                Sign up here
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
