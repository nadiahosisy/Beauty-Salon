import React from "react";
import Service from "./Service";

const ServicesHomePage = () => {
  return (
    <div className="main-container-services-div">
      <div className="heading-services">
        <div className="heading-container-home">
          <h2 className="heading-title-home-page">Our services</h2>
        </div>
        <div className="main-container">
          <Service
            imageSrc={"/images/hair-cut-services.webp"}
            title={"Haircuts"}
            description={
              "Get your dream haircut with our expert stylists who use the latest techniques and top-quality products to achieve the perfect cut foryour needs."
            }
          />
          <Service
            imageSrc={"/images/make-up-services.webp"}
            title={"Makeup"}
            description={
              "Our experienced makeup artists use top-quality products and personalized techniques to create a look that complements your features, skin tone, and occasion."
            }
          />
          <Service
            imageSrc={"/images/studio-nail-services.webp"}
            title={"Nails Design"}
            description={
              "Our experienced nail technicians create custom nail designs that will make your hands and feet look and feel amazing, using the latest products and techniques."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHomePage;
