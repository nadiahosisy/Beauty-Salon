import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

const SignUp = () => {
  const handleSignUpSubmit = () => {
    // Logic for handling signup form submission
  };

  return (
    <AuthForm title="Register" isLogin={false} onSubmit={handleSignUpSubmit} />
  );
};

export default SignUp;
