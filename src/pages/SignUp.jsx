import React from "react";

const SignUp = () => {
  return (
    <div className="main-div-sign-up-page ">
      <h2 className="header-register">Register</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <div className="label-input-div">
            <label className="label-register">Email address *</label>
            <input
              className="input-register"
              type="email"
              placeholder="Enter your email address"
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

          <div className="sign-up-btn-div">
            <button className="Button-register">Sign Up</button>
          </div>
          <p className="paragraph-register">
            A link to set a new password will be sent to your email address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
