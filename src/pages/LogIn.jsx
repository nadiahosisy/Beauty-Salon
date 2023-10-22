import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

const Login = () => {
  const handleLoginSubmit = () => {
    // Logic for handling login form submission
  };

  return <AuthForm title="Login" isLogin={true} onSubmit={handleLoginSubmit} />;
};

export default Login;
