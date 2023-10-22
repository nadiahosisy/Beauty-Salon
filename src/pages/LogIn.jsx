import React from "react";
import { InputComponent } from "../components";

const Login = () => {
  return (
    <div className="main-div-sign-up-page ">
      <h2 className="header-register">Login</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <InputComponent
            label={"Username or email address *"}
            type={"email"}
            placeholder={"Enter your username or email address"}
          />
          <InputComponent
            label={"Password *"}
            type={"password"}
            placeholder={"Enter your password"}
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
        </div>
      </div>
    </div>
  );
};

export default Login;
