import React from "react";

const AuthForm = ({ title, isLogin, onSubmit }) => {
  return (
    <div className="main-div-signUp-page">
      <h2 className="header-register">{title}</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <div className="label-input-div">
            <label className="label-register">
              {isLogin ? "Username or Email address *" : "Email address *"}
            </label>
            <input
              className="input-register"
              type={isLogin ? "text" : "email"}
              placeholder={
                isLogin
                  ? "Enter your username or email address"
                  : "Enter your email address"
              }
            />
          </div>
          {!isLogin && (
            <div className="label-input-div">
              <label className="label-register">Password *</label>
              <input
                className="input-register"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          )}
          {!isLogin && (
            <div className="label-input-div">
              <label className="label-register">
                <input type="checkbox" /> Remember me
              </label>
            </div>
          )}
          {!isLogin && (
            <p className="paragraph-register">
              <a className="anchor-login-page" href="/forgot-password">
                Lost your password?
              </a>
            </p>
          )}
          <div className="sign-up-btn-div">
            <button className="Button-register" onClick={onSubmit}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
