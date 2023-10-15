import React from "react";

const FeaturesAndBenefits = () => {
  return (
    <div className="main-div-container-features-benifts">
      <div className="features-benifts-main-div">
        <span className="left-side"></span>
        <div className="text-features-benifits">Features & Benefits</div>
        <span className="right-side"></span>
      </div>

      <div className="main-container">
        {/* First Section */}
        <div className="section">
          <div className="circle">
            <div className="dot"></div>
          </div>
          <span className="text">Expert Hair Styling</span>
        </div>

        {/* Second Section */}
        <div className="section">
          <div className="circle">
            <div className="dot"></div>
          </div>
          <span className="text">Another Feature</span>
        </div>

        {/* Third Section */}
        <div className="section">
          <div className="image-container">
            <img
              src="./images/herson-rodriguez.webp"
              alt="Sample"
              className="image-herson-rodriguez"
            />
          </div>
          <span className="text">Yet Another Feature</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
