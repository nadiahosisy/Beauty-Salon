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
      <div className="main-div-featuers">
        <div className="header-div-features">
          <h3 className="header-featuers">Features</h3>
        </div>
        <div className="container-div-featuers">
          <div className="circle">
            <div className="dot">
              <span>Expert Hair Styling</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesAndBenefits;
