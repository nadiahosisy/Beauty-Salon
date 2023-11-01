import React, { useState } from "react";
import { InputComponent } from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const logIn = async () => {
    if (username === "1111" && password === "1111") {
      try {
        window.localStorage.setItem("username", username);
        navigate("/UserPage");
      } catch (e) {
        setErrorMessage("something went wrong");
        console.log(e);
      }
    } else {
      console.log("Invalid username or password");
    }
  };

  return (
    <div className="main-div-sign-up-page ">
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
            <button onClick={logIn} className="Button-register">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
