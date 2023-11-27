import React from "react";
import moment from "moment";
import nailsIcon from "../../public/icons/nail-polish.png";
import makeupIcon from "../../public/icons/cosmetics.png";
import haircutIcon from "../../public/icons/hair-cutting.png";

const Appointment = ({ appointment, onClick }) => {
  const getServiceIcon = (serviceType) => {
    switch (serviceType) {
      case "Nails desgin":
        return nailsIcon;
      case "Makeup":
        return makeupIcon;
      case "Haircut":
        return haircutIcon;
      default:
        return null;
    }
  };

  return (
    <div className="appointment-card" onClick={() => onClick(appointment)}>
      <div className="card-header">
        <div className="icon-container">
          {getServiceIcon(appointment.service) && (
            <img
              src={getServiceIcon(appointment.service)}
              alt="Service Icon"
              className="service-icon"
            />
          )}
        </div>
        <div className="card-details">
          <p className="card-title">{appointment.title}</p>
          <p className="card-time">
            {moment(appointment.start).format("MMMM Do, YYYY h:mm a")} -{" "}
            {moment(appointment.end).format("h:mm a")}
          </p>
        </div>
      </div>
      <div className="card-actions">
        {/* Add any additional actions or buttons here */}
      </div>
    </div>
  );
};

export default Appointment;
