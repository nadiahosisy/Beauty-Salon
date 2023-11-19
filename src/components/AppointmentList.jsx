import React from "react";

const AppointmentList = ({ appointments }) => {
  const renderAppointmentsByCategory = (category) => {
    const filteredAppointments = appointments.filter((appointment) =>
      appointment.title.toLowerCase().includes(category.toLowerCase())
    );

    return (
      <div key={category} className="category-container">
        <h3 className="category-header">{category}</h3>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment, index) => (
            <div key={index} className="appointment-item">
              <p>{appointment.title}</p>
              <p>Start: {appointment.start.toLocaleString()}</p>
              <p>End: {appointment.end.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No {category} Appointments Listed</p>
        )}
      </div>
    );
  };

  return (
    <div className="appointments-list">
      <div className="category-wrapper">
        {renderAppointmentsByCategory("Makeup")}
      </div>

      <div className="category-wrapper">
        {renderAppointmentsByCategory("Haircut")}
      </div>
      <div className="category-wrapper">
        {renderAppointmentsByCategory("Nails")}
      </div>
    </div>
  );
};

export default AppointmentList;
