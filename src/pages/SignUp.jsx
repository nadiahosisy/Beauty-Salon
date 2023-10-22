import React from "react";
import { InputComponent } from "../components";

const SignUp = () => {
  return (
    <div className="main-div-sign-up-page ">
      <h2 className="header-register">Register</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <InputComponent
            label={"Email address *"}
            type={"email"}
            placeholder={"Enter your email address"}
          />
          <InputComponent
            label={"Password *"}
            type={"password"}
            placeholder={"Enter your password"}
          />
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
