import React, { useState, useEffect, useContext } from "react";
import SchedulerModal from "../components/SchedulerModal";
import { auth } from "../config/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthProvider";
import AppointmentList from "../components/AppointmentList";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

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

  const handleGet = async () => {
    if (currentUser === null) {
      return;
    }
    console.log("use effect works");
    const q = query(
      collection(db, "users"),
      where("uid", "==", currentUser?.email)
    );
    console.log(currentUser);

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

    if (latestDoc) {
      console.log("Latest document ID:", latestDoc.id);
      console.log("Latest document data:", latestDoc.data());
      setAppointments(formattedEvents);
    } else {
      console.log("No documents found.");
    }
  };

  useEffect(() => {
    // Run handleGet when the component mounts
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    // Run handleGet when the component mounts
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleModal]);

  return (
    <>
      <div className="welcome-page-container">
        <h2 className="welcome-message">
          Welcome,{" "}
          <span className="welcome-message-user">{user?.email || "Guest"}</span>{" "}
        </h2>
      </div>
      <div className="user-page-container">
        <AppointmentList appointments={appointments} />

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
