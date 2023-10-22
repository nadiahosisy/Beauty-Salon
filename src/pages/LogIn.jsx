import React from "react";

const Login = () => {
  return (
    <div className="main-div-signUp-page">
      <h2 className="header-register">Login</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <div className="label-input-div">
            <label className="label-register">
              Username or Email address *
            </label>
            <input
              className="input-register"
              type="text"
              placeholder="Enter your username or email address"
            />
          </div>
          <div className="label-input-div">
            <label className="label-register">Password *</label>
            <input
              className="input-register"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="label-input-div">
            <label className="label-register">
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <p className="paragraph-register">
            <a href="/forgot-password">Lost your password?</a>
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
