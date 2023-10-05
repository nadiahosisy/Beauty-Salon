import React from "react";
import "../../style/upper-services-page.css";

const Service = ({ imageSrc, title, description }) => {
  return (
    <div className="card-container">
      <img className="img" src={imageSrc} alt={title}></img>
      <div className="anchor">
        <a className="anchor" href="#" style={{ textDecoration: "none" }}>
          {title}
        </a>
      </div>
      <div className="content-div-services">{description}</div>
      <div className="anchor-read-more">
        <a
          className="anchor-read-more"
          href="#"
          style={{ textDecoration: "none" }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Service;
