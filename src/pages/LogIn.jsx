import React, { useState, useRef } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const { signup } = useAuth();
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const nameRefSignUp = useRef();
  const emailRefSignUp = useRef();
  const passwordRefSignUp = useRef();
  const emailRefLogin = useRef();
  const passwordRefLogin = useRef();
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    if (
      !nameRefSignUp.current.value ||
      !emailRefSignUp.current.value ||
      !passwordRefSignUp.current.value
    ) {
      setErrorMessage("All fields required");
      return;
    }
    try {
      console.log(emailRefSignUp.current.value);
      await signup(
        emailRefSignUp.current.value,
        passwordRefSignUp.current.value
      );
      window.localStorage.setItem("email", currentUser?.multiFactor.user.email);
      navigate("/");
    } catch (e) {
      if (passwordRefSignUp.current.value.length < 6) {
        setErrorMessage("password must be at least 6 characters");
      }
      setErrorMessage("something went wrong");
      console.log(e);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (
      //   !nameRefSignUp.current.value ||
      !emailRefLogin.current.value ||
      !passwordRefLogin.current.value
    ) {
      setErrorMessage("All fields required");
      return;
    }
    try {
      //   console.log(emailRef.current.value);
      await login(emailRefLogin.current.value, passwordRefLogin.current.value);
      console.log(currentUser);
      window.localStorage.setItem("email", currentUser?.multiFactor.user.email);
      navigate("/");
    } catch (e) {
      setErrorMessage("something went wrong");
      console.log(e);
    }
  }

  return (
    <div>
      {isLogin ? (
        <form
          className="login"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1>Log In</h1>
          <input type="email" placeholder="email" ref={emailRefLogin} />
          <input
            type="password"
            placeholder="password"
            ref={passwordRefLogin}
          />
          <input type="submit" onClick={handleLogin} />
          <p>
            {" "}
            doesn't have an account yet ?{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}
            >
              Click Here
            </span>{" "}
          </p>
        </form>
      ) : (
        <form
          className="signup"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1>Register</h1>
          <input type="text" placeholder="name" ref={nameRefSignUp} />
          <input type="email" placeholder="email" ref={emailRefSignUp} />
          <input
            type="password"
            placeholder="password"
            ref={passwordRefSignUp}
          />
          <input type="submit" onClick={handleSignUp} />
          <p>
            {" "}
            have an account ?{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}
            >
              Click Here
            </span>{" "}
          </p>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}
