import React from "react";
import TeamMember from "./TeamMember";

const OurTeam = ({ isHomePage }) => {
  const mainDivClass = isHomePage
    ? "our-team-main-div-home-page"
    : "our-team-main-div";

  return (
    <div className={mainDivClass}>
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
              "Nadia’s mastery in hair styling and makeup artistry has established her as a highly coveted beauty expert in our community. Her genuine kindness and enthusiasm for the world of beauty shine through in every treatment she offers."
            }
          />
        </div>
        <div className="right-description-div">
          <TeamMember
            img={"./images/Emma.webp"}
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
