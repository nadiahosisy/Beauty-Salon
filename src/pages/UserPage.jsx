import React, { useState, useEffect } from "react";
import SchedulerModal from "../components/SchedulerModal";
import { auth } from "../firebaseConfig";

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
    <div className="user-page-container">
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          {/* List user's appointments here */}
          {/* For each appointment, you can display the details */}
        </div>
      ) : (
        <h2>No Appointments Listed</h2>
      )}

      <button onClick={toggleModal}>Make New Appointment</button>

      {/* Scheduler Modal */}
      {isModalOpen && <SchedulerModal closeModal={toggleModal} />}
    </div>
  );
};

export default UserPage;
