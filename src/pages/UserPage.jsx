import React, { useState, useEffect, useContext } from "react";
import SchedulerModal from "../components/SchedulerModal";
import { auth } from "../config/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthProvider";
import AppointmentList from "../components/AppointmentList";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [latDoc, setLatDoc] = useState(null);

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
    setLatDoc(latestDoc);
    extractedEvents = latestDoc.data().events || [];
    const formattedEvents = extractedEvents.map((event) => ({
      ...event,
      start: event.start.toDate(),
      end: event.end.toDate(),
    }));

    if (latestDoc) {
      setAppointments(formattedEvents);
    } else {
      console.log("No documents found.");
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    const userDocRef = doc(db, "users", latDoc.id);

    const docSnapshot = await getDoc(userDocRef);

    try {
      const currentEvents = docSnapshot.data().events || [];

      const updatedEvents = currentEvents.filter(
        (event) => event.id !== appointmentId
      );

      await updateDoc(userDocRef, { events: updatedEvents });

      handleGet();

      console.log("Event deleted successfully.");
    } catch (error) {
      console.error("Error deleting event: ", error);
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
  }, [isModalOpen]);

  return (
    <>
      <div className="welcome-page-container">
        <h2 className="welcome-message">
          Welcome,{" "}
          <span className="welcome-message-user">{user?.email || "Guest"}</span>{" "}
        </h2>
      </div>
      <div className="user-page-container">
        <AppointmentList
          appointments={appointments}
          onDelete={handleDeleteAppointment}
        />

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
