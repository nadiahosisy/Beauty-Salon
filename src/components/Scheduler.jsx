import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthProvider";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { v4 as uuidv4 } from "uuid";

// Import your Modal component here
import Modal from "./Modal";

const localizer = momentLocalizer(moment);

const Scheduler = ({ closeModal }) => {
  const { currentUser } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [forceRender, setForceRender] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (title, message, showIcon) => {
    setModalContent({ title, message, showIcon });
  };

  const closeModalHandler = () => {
    setModalContent(null);
  };

  const handleGet = async () => {
    try {
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

      extractedEvents = latestDoc?.data().events || [];
      const formattedEvents = extractedEvents.map((event) => ({
        ...event,
        start: event.start.toDate(),
        end: event.end.toDate(),
      }));

      setEvents(formattedEvents);
      setForceRender((prev) => !prev);

      if (latestDoc) {
        console.log("Latest document ID:", latestDoc.id);
        console.log("Latest document data:", latestDoc.data());
      } else {
        console.log("No documents found.");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      openModal("Error", "Failed to fetch data.");
    }
  };

  const handleSubmit = async () => {
    if (!selectedService || !selectedDate) {
      setModalContent({
        type: "error",
        message: "Please select a service and date before submitting.",
      });
      setIsModalOpen(true);
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
      handleGet();

      setModalContent({
        type: "success",
        message: "Appointment successfully scheduled!",
        showIcon: true,
      });

      setIsModalOpen(true);

      setTimeout(() => {
        setIsModalOpen(false);
        closeModal(true);
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setModalContent({
        type: "error",
        message: "Failed to schedule the appointment.",
        showIcon: false,
      });
      setIsModalOpen(true);
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
      openModal(
        "Error",
        "Please select a service and date before choosing a time slot."
      );
      return;
    }

    const newEvent = {
      start,
      end,
      title: `Appointment for ${selectedService} on ${moment(
        selectedDate
      ).format("MMMM Do, YYYY")}`,
      id: uuidv4(),
    };
    setEvents([...events, newEvent]);
  };

  useEffect(() => {
    if (!currentUser) {
      console.log("No current user found");
    }
  }, [currentUser]);

  useEffect(() => {
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <p className="instruction-text">
          Click on an available slot in the calendar to schedule your
          appointment.
        </p>
      </div>
      {/* Calendar */}
      <div className="my-calendar">
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
      </div>

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

      {/* Modal */}
      {modalContent && (
        <Modal title={modalContent.title} onClose={closeModalHandler}>
          <p>{modalContent.message}</p>
        </Modal>
      )}
    </div>
  );
};

export default Scheduler;
