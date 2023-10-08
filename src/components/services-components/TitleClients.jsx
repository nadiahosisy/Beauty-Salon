import React from "react";

const TitleClients = ({ h2, p }) => {
  return (
    <div className="clients-header">
      <h2 className="header-client-div">{h2}</h2>
      <p className="paragraph-client">{p}</p>
    </div>
  );
};

export default TitleClients;
