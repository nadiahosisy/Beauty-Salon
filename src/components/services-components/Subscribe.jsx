import React from "react";

const Subscribe = () => {
  return (
    <div className="main-subscribe-div">
      <div className="center-subscribe-div">
        <div className="header-subscribe-div">
          <h1 className="header-subscribe">Subscribe to Newsletter</h1>
        </div>
        <div className="pargraph-subscribe-div">
          <p className="pargraph">
            Enter your email address to register to our newsletter subscription!{" "}
          </p>
        </div>
        <div className="input-subscribe-div">
          <input></input>
        </div>
        <div className="button-subscribe-div">
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
