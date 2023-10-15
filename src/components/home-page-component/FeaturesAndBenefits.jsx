import React from "react";

const FeaturesAndBenefits = () => {
  return (
    <>
      <div className="main-div-container-features-benefits">
        <div className="features-benefits-main-div">
          <span className="left-side"></span>
          <div className="text-features-benefits">Features & Benefits</div>
          <span className="right-side"></span>
        </div>
      </div>

      <div className="main-container">
        {/* First Section */}
        <div className="section">
          <h3 className="header">Feature 1</h3>
          <div className="circle">
            <div className="dot"></div>
          </div>
          <span className="text">Expert Hair Styling</span>
        </div>

        {/* Second Section */}
        <div className="section">
          <h3 className="header">Feature 2</h3>
          <div className="circle">
            <div className="dot"></div>
          </div>
          <span className="text">Another Feature</span>
        </div>

        {/* Third Section with Image */}
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
    </>
  );
};

export default FeaturesAndBenefits;
