import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const UserPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleServiceChange = (e) => {
    // Handle service selection
    setSelectedService(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectSlot = ({ start, end }) => {
    if (selectedService && selectedDate) {
      const newEvent = {
        start,
        end,
        title: `Appointment for ${selectedService} on ${moment(
          selectedDate
        ).format("MMMM Do, YYYY")}`,
      };
      setEvents([...events, newEvent]);
    } else {
      alert("Please select a service and date before choosing a time slot.");
    }
  };

  return (
    <div className="scheduler-container">
      {/* Service selection */}
      <div className="form-group">
        <label>Select Service:</label>
        <select value={selectedService} onChange={handleServiceChange}>
          <option value="">Select a service</option>
          <option value="Haircut">Haircut</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
          {/* Add more service options as needed */}
        </select>
      </div>

      {/* Date selection */}
      <div className="form-group">
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>

      {/* Calendar for time slot selection */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        selectable
        defaultView="week"
        views={["week", "day"]}
      />
    </div>
  );
};

export default UserPage;
