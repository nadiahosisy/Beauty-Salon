import React, { useState } from "react";
import { InputComponent } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuthGlobalContext } from "../context/AuthProvider";
import Modal from "../components/Modal";

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
        navigate("/user-page");
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
              <Modal
                title=""
                onClose={handleLoginFailedModalClose}
                showIcon="Warning"
              >
                <p>Please Enter valid Username or Password </p>
              </Modal>
            )}
          </div>

          {!isLoggedIn && (
            <p className="paragraph-sign-up">
              Dont have an account? &nbsp;
              <Link className="anchor-register" to="/signup">
                Sign up here
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
