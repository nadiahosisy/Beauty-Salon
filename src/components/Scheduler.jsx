import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const UserPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = async () => {
    if (selectedService && selectedDate) {
      try {
        const docRef = await addDoc(collection(db, "appointments"), {
          service: selectedService,
          date: selectedDate,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert("Please select a service and date before submitting.");
    }
  };

  const handleCancel = () => {
    setSelectedService("");
    setSelectedDate("");
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectSlot = async ({ start, end }) => {
    if (selectedService && selectedDate) {
      const newEvent = {
        start,
        end,
        title: `Appointment for ${selectedService} on ${moment(
          selectedDate
        ).format("MMMM Do, YYYY")}`,
      };

      setEvents([...events, newEvent]);

      try {
        const docRef = await addDoc(collection(db, "appointments"), {
          service: selectedService,
          date: selectedDate,
          start: start.toISOString(),
          end: end.toISOString(),
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Please select a service and date before choosing a time slot.");
    }
  };

  return (
    <div className="scheduler-container">
      <div className="form-group">
        <label>Select Service:</label>
        <select value={selectedService} onChange={handleServiceChange}>
          <option value="">Select a service</option>
          <option value="Haircut">Haircut</option>
          <option value="Makeup">Makeup</option>
          <option value="Nails Design">Nails Design</option>
        </select>
      </div>

      <div className="form-group">
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>

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

      <div className="form-group">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserPage;
