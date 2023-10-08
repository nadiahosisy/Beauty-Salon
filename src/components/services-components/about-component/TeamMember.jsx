import React from "react";

const TeamMember = ({ img, name, job, text }) => {
  return (
    <>
      <img className="left-img" src={img}></img>
      <div className="container-text-div">
        <h3 className="nadia-img">{name}</h3>
        <div className="founder-stylist-div">{job}</div>
        <div className="left-text-div">{text}</div>
      </div>
    </>
  );
};

export default TeamMember;
