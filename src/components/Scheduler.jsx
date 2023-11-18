import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthProvider";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Scheduler = ({ closeModal }) => {
  const { currentUser } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [forceRender, setForceRender] = useState(false);

  const handleGet = async () => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", currentUser.email)
    );

    const querySnapshot = await getDocs(q);
    let latestDate = null;
    let latestDoc = null;
    let extractedEvents = [];

    querySnapshot.forEach((doc) => {
      const currentDate = doc.data().date;

      if (!latestDate || currentDate > latestDate) {
        latestDate = currentDate;
        latestDoc = doc;
      }
    });
    extractedEvents = latestDoc.data().events || [];
    const formattedEvents = extractedEvents.map((event) => ({
      ...event,
      start: event.start.toDate(),
      end: event.end.toDate(),
    }));

    console.log("extracted ", formattedEvents);
    // Set the extracted events to the state
    setEvents(formattedEvents);
    setForceRender((prev) => !prev);
    if (latestDoc) {
      console.log("Latest document ID:", latestDoc.id);
      console.log("Latest document data:", latestDoc.data());
    } else {
      console.log("No documents found.");
    }
  };

  const handleSubmit = async () => {
    if (!selectedService || !selectedDate) {
      alert("Please select a service and date before submitting.");
      return;
    }

    try {
      const newAppointment = {
        uid: currentUser.email,
        service: selectedService,
        date: selectedDate.toISOString(),
        events: events,
      };
      const docRef = await addDoc(collection(db, "users"), newAppointment);
      console.log("Document written with ID: ", docRef.id);
      alert("Appointment successfully scheduled!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to schedule the appointment.");
    }
  };

  const handleClear = () => {
    setEvents([]);
    setSelectedService("");
    setSelectedDate(new Date());
  };

  const handleCancel = () => {
    closeModal(true);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(moment(date).toDate());
  };

  const handleSelectSlot = ({ start, end }) => {
    if (!selectedService || !selectedDate) {
      alert("Please select a service and date before choosing a time slot.");
      return;
    }

    console.log(start);

    const newEvent = {
      start,
      end,
      title: `Appointment for ${selectedService} on ${moment(
        selectedDate
      ).format("MMMM Do, YYYY")}`,
    };
    setEvents([...events, newEvent]);
  };

  useEffect(() => {
    if (!currentUser) {
      // Handle the case where currentUser is not defined
      console.log("No current user found");
      // Optionally, redirect or show a message
    }
  }, [currentUser]);

  useEffect(() => {
    // Run handleGet when the component mounts
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="scheduler-container">
      {/* Service Selection */}
      <div className="form-group">
        <label>Select Service:</label>
        <select value={selectedService} onChange={handleServiceChange}>
          <option value="">Select a service</option>
          <option value="Haircut">Haircut</option>
          <option value="Makeup">Makeup</option>
          <option value="Nails Design">Nails Design</option>
        </select>
      </div>
      {/* Date Selection */}
      <div className="form-group">
        <label>Select Date:</label>
        <input
          type="date"
          value={moment(selectedDate).format("YYYY-MM-DD")}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>
      {/* Calendar */}
      <Calendar
        key={forceRender}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        selectable
        defaultView="week"
        views={["week", "day"]}
      />
      {/* Action Buttons */}
      <div className="form-group">
        <div className="buttons-scheduler-div">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="delete-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
