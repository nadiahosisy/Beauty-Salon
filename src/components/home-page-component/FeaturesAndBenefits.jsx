import React from "react";
import CircleDotText from "./CircleDotText";
import OurTeam from "../services-components/about-component/OurTeam";

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
            <span className="span-text">Expert Hair Styling</span>
          </div>
          <CircleDotText text="Professional Nail Services" />
          <CircleDotText text="Flawless Makeup Application" />
          <CircleDotText text="Relaxing Spa Treatments" />
          <CircleDotText text="Ongoing Support" />
        </div>

        {/* Second Section */}
        <div className="section">
          <h3 className="header-features">Benefits</h3>
          <div className="circle-dot-text-div">
            <div className="circle">
              <div className="dot"></div>
            </div>
            <span className="span-text">Enhanced Beauty</span>
          </div>
          <CircleDotText text="Stress Relief" />
          <CircleDotText text="Increased Confidence" />
          <CircleDotText text="Affordable Prices" />
          <CircleDotText text="Sustained Partnership" />
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
      <OurTeam />
    </>
  );
};

export default FeaturesAndBenefits;
