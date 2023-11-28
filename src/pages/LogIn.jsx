import React, { useState } from "react";
import { InputComponent } from "../components";
import { useNavigate } from "react-router-dom";
import { useAuthGlobalContext } from "../context/AuthProvider";
import LoginFailedModal from "../components/LoginFailedModal";

const Login = () => {
  const { login, isLoggedIn } = useAuthGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginFailedModal, setShowLoginFailedModal] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFailedModalClose = () => {
    setShowLoginFailedModal(false);
  };

  const logInClick = async () => {
    try {
      const user = await login(username, password);
      if (user) {
        console.log("connected");
        setShowLoginFailedModal(false);
        window.localStorage.setItem("email", username);
        navigate("/UserPage");
      }
    } catch (error) {
      setShowLoginFailedModal(true);
    }
  };

  return (
    <div className="main-div-sign-up-page">
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
          <div className="sign-up-btn-div">
            <button onClick={logInClick} className="Button-register">
              Login
            </button>
            {showLoginFailedModal && (
              <LoginFailedModal closeModal={handleLoginFailedModalClose} />
            )}
          </div>

          {!isLoggedIn && (
            <p className="paragraph-sign-up">
              Dont have an account? &nbsp;
              <a className="anchor-register" href="/signUp">
                Sign up here
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
