import React from "react";

const FeaturesAndBenefits = () => {
  return (
    <div className="main-container">
      {/* First Section */}
      <div className="section">
        <h3 className="header">Features</h3>
        <div className="circle">
          <div className="dot"></div>
        </div>
        <span className="text">Expert Hair Styling</span>
      </div>

      {/* Second Section */}
      <div className="section">
        <h3 className="header">Benefits</h3>
        <div className="circle">
          <div className="dot"></div>
        </div>
        <span className="text">Another Feature</span>
      </div>

      <div className="section">
        <div className="image-container">
          <img
            src="./images/herson-rodriguez.webp"
            alt="Sample"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
