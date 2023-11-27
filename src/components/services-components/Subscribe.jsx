import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import Footer from "./Footer";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const validateEmail = (email) => {
    // Add your email validation logic here
    // For simplicity, this example checks if the input contains '@'
    return email.includes("@");
  };

  const handleSendClick = () => {
    if (validateEmail(email)) {
      addDoc(collection(db, "subscribers"), {
        email: email,
      });

      setEmail("");
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <div className="main-subscribe-div">
      <div className="center-subscribe">
        <div className="header-subscribe-div">
          <h1 className="header-subscribe">Subscribe to Newsletter</h1>
        </div>
        <div className="pargraph-subscribe-div">
          <p className="pargraph">
            Enter your email address to register to our newsletter subscription!{" "}
          </p>
        </div>
        <div className="input-subscribe">
          <input
            className={`input-subscribe-div ${!isValidEmail ? "invalid" : ""}`}
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="send-btn-div">
          <button className="send-btn" onClick={handleSendClick}>
            <span>Send</span>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Subscribe;
