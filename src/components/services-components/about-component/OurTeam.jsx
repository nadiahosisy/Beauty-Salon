import React from "react";
import TeamMember from "./TeamMember";

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
          <TeamMember
            img={"./images/beauty-nadia.jpg"}
            name={"Nadia"}
            job={"Founder & Master Stylist"}
            text={
              "  Nadia’s expertise in hair styling and makeup artistry has made her the most sought-after beauty professional in town. Her warmth and passion for beauty radiate in every service she provides."
            }
          />
        </div>
        <div className="right-description-div">
          <TeamMember
            img={"./images/beauty-nadia.jpg"}
            name={"Emma"}
            job={"Nail Artist"}
            text={
              "Emma's creativity in nail design and her exceptional artistic talent make her an invaluable member of our team. Her meticulous approach and dedication to excellence guarantee that each customer walks away with impeccable nails."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
