import React from "react";
import Footer from "./Footer";

const Subscribe = () => {
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
            className="input-subscribe-div"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="send-btn-div">
          <button className="send-btn">
            <span>Send</span>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Subscribe;
