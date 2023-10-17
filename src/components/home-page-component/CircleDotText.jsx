import React from "react";
import PropTypes from "prop-types";

const CircleDotText = ({ text }) => {
  return (
    <div className="circle-dot-text-div">
      <div className="circle">
        <div className="dot"></div>
      </div>
      <span className="span-text">{text}</span>
    </div>
  );
};

export default CircleDotText;
