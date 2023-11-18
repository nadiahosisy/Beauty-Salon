import React, { useState, useEffect } from "react";
import SchedulerModal from "../components/SchedulerModal";
import { auth } from "../config/firebaseConfig";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="user-page-container">
        <h2 className="welcome-message">Welcome, {user?.email || "Guest"}!</h2>
      </div>
      <div className="user-page-container">
        {user ? (
          <div>
            <div className="appointments-list">
              {/* Display user's appointments here */}
              {/* You can map over the user's appointments and show details for each */}
              {/* Example: */}
              {/* {user.appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <p>{appointment.service}</p>
                <p>{appointment.date}</p>
                <p>{appointment.time}</p>
              </div>
            ))} */}
              <h2 className="no-appointments-message">
                No Appointments Listed ?
              </h2>
            </div>
          </div>
        ) : (
          <h2 className="no-appointments-message">No Appointments Listed ?</h2>
        )}

        <button className="new-appointment-btn" onClick={toggleModal}>
          Make New Appointment
        </button>

        {/* Scheduler Modal */}
        {isModalOpen && <SchedulerModal closeModal={toggleModal} />}
      </div>
    </>
  );
};

export default UserPage;
