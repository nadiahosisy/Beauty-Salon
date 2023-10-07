import React from "react";

const OurTeam = () => {
  return (
    <div className="our-team-main-div">
      <div className="our-team-div">
        <h2 className="our-team">Our team</h2>
        <div className="our-team-text">
          Meet the Beauty Gurus: Discover the Talented Team Behind
          Beauty-Salon-Nadia
        </div>
      </div>
      <div className="description-main-div">
        <div className="left-description-div">
          <img className="left-img" src="./images/beauty-nadia.jpg"></img>
          <div className="container-text-div">
            <h3 className="nadia-img">Nadia</h3>
            <div className="founder-stylist-div">Founder & Master Stylist</div>
            <div className="left-text-div">
              Nadia’s expertise in hair styling and makeup artistry has made her
              the most sought-after beauty professional in town. Her warmth and
              passion for beauty radiate in every service she provides.
            </div>
          </div>
        </div>
        <div className="right-description-div"></div>
      </div>
    </div>
  );
};

export default OurTeam;
