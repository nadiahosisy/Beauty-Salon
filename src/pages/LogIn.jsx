import React, { useState } from "react";
import { InputComponent } from "../components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the username and password here
    if (username === "1111" && password === "1111") {
      console.log("Login successful");
      // Perform actions for successful login, e.g., redirect to another page
    } else {
      console.log("Invalid username or password");
      // Handle incorrect credentials, e.g., show an error message to the user
    }
  };

  return (
    <div className="main-div-sign-up-page ">
      <h2 className="header-register">Login</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <form onSubmit={handleSubmit}>
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
              <button className="Button-register">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
