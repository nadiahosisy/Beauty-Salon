import React from "react";
import "../../style/inner-services-page.css";

const RaitingCard = ({
  stars,
  text,
  imageSrc,
  clientName,
  position,
  rating,
}) => {
  const clientDivClass =
    position === "left" ? "client-div-left" : "client-div-right";
  const clientNameRating = rating === "5" ? "name-client-fives" : "name-client";
  return (
    <div className="star-rating">
      {[...Array(stars)].map((_, index) => (
        <span key={index} className="fa fa-star checked"></span>
      ))}
      <div className="upper-div-text">{text}</div>
      <div className={clientDivClass}>
        <img className="img-client" src={imageSrc} alt={clientName}></img>
        <div className={clientNameRating}>{clientName}</div>
      </div>
    </div>
  );
};

export default RaitingCard;
