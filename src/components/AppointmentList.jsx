import React from "react";
import moment from "moment";

const AppointmentList = ({ appointments }) => {
  return (
    <div className="appointments-list-container">
      <h2 className="list-header">Your Appointments</h2>
      {appointments.length > 0 ? (
        <div className="card-container">
          {appointments.map((appointment, index) => (
            <div key={index} className="appointment-card">
              <p className="card-title">{appointment.title}</p>
              <p className="card-time">
                {moment(appointment.start).format("MMMM Do, YYYY h:mm a")} -{" "}
                {moment(appointment.end).format("h:mm a")}
              </p>
              <div className="card-actions">
                {/* Add any additional actions or buttons here */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-appointments">No appointments scheduled</p>
      )}
    </div>
  );
};

export default AppointmentList;
