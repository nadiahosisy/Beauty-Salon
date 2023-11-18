import React from "react";

const AppointmentList = ({ appointments }) => {
  return (
    <div className="appointments-list">
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <p>{appointment.title}</p>
            <p>Start: {appointment.start.toLocaleString()}</p>
            <p>End: {appointment.end.toLocaleString()}</p>
          </div>
        ))
      ) : (
        <h2 className="no-appointments-message">No Appointments Listed</h2>
      )}
    </div>
  );
};

export default AppointmentList;
