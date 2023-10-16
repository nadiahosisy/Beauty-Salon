import React from "react";

const FeaturesAndBenefits = () => {
  return (
    <>
      <div className="main-div-container-features-benifts">
        <div className="features-benifts-main-div">
          <spn className="left-side"></spn>
          <div className="text-features-benifits">Features & Benefits</div>
          <span className="right-side"></span>
        </div>
      </div>
      <div className="main-container-features-benifts">
        {/* First Section */}
        <div className="section">
          <h3 className="header-features">Features</h3>
          <div className="circle-dot-text-div">
            <div className="circle">
              <div className="dot"></div>
            </div>
            <span className="text">Expert Hair Styling</span>
          </div>
        </div>

        {/* Second Section */}
        <div className="section">
          <h3 className="header-features">Benefits</h3>
          <div className="circle-dot-text-div">
            <div className="circle">
              <div className="dot"></div>
            </div>
            <span className="text">Another Feature</span>
          </div>
        </div>

        {/* Third Section with Image */}
        <div className="section">
          <div className="image-container">
            <img
              src="./images/herson-rodriguez.webp"
              alt="Sample"
              className="image-herson-rodriguez"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesAndBenefits;
