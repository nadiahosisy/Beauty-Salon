import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "../components/AuthForm/InputComponent";
import { useAuthGlobalContext } from "../context/AuthProvider";

function SignUp() {
  const { signup } = useAuthGlobalContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(null);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError(null);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError(null);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please provide a valid email!");
      isValid = false;
    }

    // Regex for password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Please enter a valid password (at least 6 characters with one digit, one lowercase, and one uppercase letter)!"
      );
      isValid = false;
    }

    // Regex for first name validation
    const nameRegex = /^[A-Za-z0-9\s'".(),-]{5,}$/;
    if (!nameRegex.test(firstName)) {
      setFirstNameError("Please enter a valid first name!");
      isValid = false;
    }

    // Regex for last name validation
    if (!nameRegex.test(lastName)) {
      setLastNameError("Please enter a valid last name!");
      isValid = false;
    }

    if (isValid) {
      try {
        const promise = await signup(email, password, firstName, lastName);
        console.log(promise);
        navigate("/UserPage");
        // Optionally reset state here
      } catch (error) {
        setError("Failed to create an account. " + error.message);
      }
    }
  };

  return (
    <div className="main-div-sign-up-page">
      <h2 className="header-register">Register</h2>
      <div className="center-signup">
        <div className="form-div-register-page">
          <form onSubmit={handleSignUp}>
            <InputComponent
              label={"Email address *"}
              type="email"
              name="email"
              placeholder={"Enter your email address"}
              onChange={handleEmailChange}
              error={emailError}
              value={email}
            />
            <InputComponent
              label={"Password *"}
              type={"password"}
              placeholder={"Enter your password"}
              onChange={handlePasswordChange}
              error={passwordError}
              value={password}
            />
            <InputComponent
              label={"First Name *"}
              type={"text"}
              placeholder={"Enter your first name"}
              value={firstName}
              onChange={handleFirstNameChange}
              error={firstNameError}
            />
            <InputComponent
              label={"Last Name *"}
              type={"text"}
              placeholder={"Enter your last name"}
              value={lastName}
              onChange={handleLastNameChange}
              error={lastNameError}
            />
            <div className="sign-up-btn-div">
              <button type="submit" className="Button-register">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
