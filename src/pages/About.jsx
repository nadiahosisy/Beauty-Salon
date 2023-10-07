import React from "react";

const About = () => {
  return (
    <div className="main-container-div">
      <div className="main-mission-statement-div">
        <div className="mission-statement-div">
          <div className="mission-statement-container">
            <h2 className="header-mission-statement">Mission statement</h2>
            <div>
              <div className="text-mission-statement">
                At Beauty-Salon-Nadia, our mission is to empower every
                individual to feel confident and beautiful. We offer a range of
                beauty services, from haircuts to nail design, to makeup
                artistry, all delivered with the highest level of
                professionalism and care. Our commitment to quality,
                affordability, and customer satisfaction makes us the go-to
                beauty destination in town.
              </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img
            className="left-image"
            src="./images/beauty-Salon-test.webp"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
