import React from "react";
import { Clients, Footer, Service, Subscribe } from "../components";

const Services = () => {
  return (
    <div className="main-services">
      <div className="heading-services">
        <div className="heading-container">
          <h2 className="heading-title">All Services</h2>
        </div>

        <div className="main-container">
          <Service
            imageSrc={"./images/hair-cut-services.webp"}
            title={"Haircuts"}
            description={
              "Get your dream haircut with our expert stylists who use the latest techniques and top-quality products to achieve the perfect cut foryour needs."
            }
          />
          <Service
            imageSrc={"./images/make-up-services.webp"}
            title={"Makeup"}
            description={
              "Our experienced makeup artists use top-quality products and personalized techniques to create a look that complements your features, skin tone, and occasion."
            }
          />
          <Service
            imageSrc={"./images/studio-nail-services.webp"}
            title={"Nails Design"}
            description={
              "Our experienced nail technicians create custom nail designs that will make your hands and feet look and feel amazing, using the latest products and techniques."
            }
          />
        </div>
      </div>

      <Clients />
    </div>
  );
};

export default Services;
