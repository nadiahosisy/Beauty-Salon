import React from "react";
import { Modal } from "react-bootstrap";
import Scheduler from "./Scheduler";

const SchedulerModal = ({ closeModal }) => {
  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Make a New Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Scheduler />
      </Modal.Body>
    </Modal>
  );
};

export default SchedulerModal;
