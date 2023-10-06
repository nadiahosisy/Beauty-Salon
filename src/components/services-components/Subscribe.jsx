import React from "react";

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
        <footer>
          <div className="social-icons">
            <a className="icons-subscribe" href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="icons-subscribe" href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="icons-subscribe" href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="icons-subscribe" href="https://www.youtube.com">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Subscribe;
