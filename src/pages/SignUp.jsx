import React from "react";

const SignUp = () => {
  return (
    <div className="main-div-signUp-page">
      <h2 className="header-register">Register</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <div className="label-input-div">
            <label className="label-register">Email address *</label>
            <input className="input-register"></input>
          </div>

          <p className="pargraph-register">
            A link to set a new password will be sent to your email address.
          </p>
          <button className="Button-register">Register</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
