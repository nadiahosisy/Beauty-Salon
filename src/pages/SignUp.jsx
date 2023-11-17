import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthGlobalContext } from "../context/AuthProvider";
import { InputComponent } from "../components";

const SignUp = () => {
  const { signup } = useAuthGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // const handleSignUp = async () => {
  //   try {
  //     await signup(email, password, firstName, lastName);
  //     navigate("/UserPage");
  //   } catch (error) {
  //     console.error("Error during signup:", error);
  //   }
  // };
  const handleSignUp = async () => {
    if (!email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    // Add more validations as required

    try {
      await signup(email, password, firstName, lastName);
      navigate("/UserPage");
      // Optionally reset state here
    } catch (error) {
      setError("Failed to create an account. " + error.message);
    }
  };
  return (
    <div className="main-div-sign-up-page ">
      <h2 className="header-register">Register</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <InputComponent
            label={"Email address *"}
            type={"email"}
            placeholder={"Enter your email address"}
            onChange={handleEmailChange}
          />
          <InputComponent
            label={"Password *"}
            type={"password"}
            placeholder={"Enter your password"}
            onChange={handlePasswordChange}
          />
          <InputComponent
            label={"First Name"}
            type={"text"}
            placeholder={"Enter your Name "}
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <InputComponent
            label={"Last Name"}
            type={"text"}
            placeholder={"Enter your Last Name"}
            value={lastName}
            onChange={handleLastNameChange}
          />
          <div className="sign-up-btn-div">
            <button onClick={handleSignUp} className="Button-register">
              Sign Up
            </button>
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
