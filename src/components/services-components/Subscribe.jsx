import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import Footer from "./Footer";
import Modal from "../Modal"; // Import your Modal component

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const handleSendClick = async () => {
    if (validateEmail(email)) {
      try {
        await addDoc(collection(db, "subscribers"), {
          email: email,
        });
        setShowThankYouModal(true);
        setEmail("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      setIsValidEmail(false);
      setShowWarningModal(true);
    }
  };

  const handleCloseThankYouModal = () => {
    setShowThankYouModal(false);
  };

  const handleCloseWarningModal = () => {
    setShowWarningModal(false);
  };

  return (
    <div className="main-subscribe-div">
      <div className="center-subscribe">
        <div className="header-subscribe-div">
          <h1 className="header-subscribe">Subscribe to Our Newsletter</h1>
        </div>
        <div className="paragraph-subscribe-div">
          <p className="paragraph-subscribe">
            Enter your email address to register to our newsletter subscription!
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
          {!isValidEmail && <p className="error-message"></p>}
        </div>
        <div className="send-btn-div">
          <button className="send-btn" onClick={handleSendClick}>
            Send
          </button>
          {showThankYouModal && (
            <Modal title="" onClose={handleCloseThankYouModal} showIcon="Ok">
              <p>Thank you for subscribing!</p>
            </Modal>
          )}
          {showWarningModal && (
            <Modal
              title=""
              onClose={handleCloseWarningModal}
              showIcon="Warning"
            >
              <p>Please enter a valid email address.</p>
            </Modal>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Subscribe;
