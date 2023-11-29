import React, { useState, useEffect } from "react";
import moment from "moment";
import Appointment from "./Appointment";
import lightModeImage from "../../public/images/12.jpg";
import darkModeImage from "../../public/images/6.avif";
import { useDarkMode } from "../context/DarkModeProvider";
import Modal from "./Modal";

const AppointmentList = ({ appointments, onDelete }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [imageSrc, setImageSrc] = useState(lightModeImage);
  const { isDarkMode } = useDarkMode();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = async () => {
    if (selectedAppointment) {
      setIsModalVisible(true);
      try {
        await onDelete(selectedAppointment.id);
        setSelectedAppointment(null);
      } catch (error) {
        console.error("Error deleting appointment: ", error);
        // Optionally, keep the modal open or handle error state here
      }
    }
  };

  const handleCardClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
  };

  useEffect(() => {
    setImageSrc(isDarkMode ? darkModeImage : lightModeImage);
  }, [isDarkMode]);

  return (
    <>
      <div className="main-div-appointment-list">
        <div className="left-photo-div">
          <img src={imageSrc} alt="Left Photo" className="left-photo" />
        </div>
        <div className="appointments-list-container">
          <div className="appointments-list-container-h2-div">
            <h2 className="appointments-list-container-h2-div-h2">
              My Appointments
            </h2>
          </div>
          <div className="appointments-list-container-appointments">
            {appointments.length > 0 ? (
              <div className="card-container-div">
                {appointments.map((appointment, index) => (
                  <Appointment
                    key={index}
                    appointment={appointment}
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            ) : (
              <p className="no-appointments">No appointments scheduled</p>
            )}

            {selectedAppointment && (
              <div className="modal">
                <div className="modal-content-div">
                  <div className="appointment-details">
                    <h2 className="appointment-details-h2">
                      Appointment Details
                    </h2>
                    <div className="icon-container">
                      {/* You can use the same logic to display the service icon */}
                    </div>
                  </div>
                  <p className="appointment-details-p-title">
                    Title: {selectedAppointment.title}
                  </p>
                  <p className="appointment-details-p-date">
                    Time:{" "}
                    {`${moment(selectedAppointment.start).format(
                      "MMMM Do, YYYY h:mm a"
                    )} - ${moment(selectedAppointment.end).format("h:mm a")}`}
                  </p>
                  <div className="modal-actions">
                    <button className="delete-btn-modal" onClick={handleDelete}>
                      Delete
                    </button>
                    <button className="close-btn" onClick={handleCloseModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalVisible && (
        <Modal
          title=""
          onClose={handleCloseModal}
          showIcon="Ok"
          closeScheduler={setIsModalVisible}
        >
          <p>The Appointment was deleted Successfully</p>
        </Modal>
      )}
    </>
  );
};

export default AppointmentList;
