import React from "react";
import { Modal, Button } from "react-bootstrap";

const LoginFailedModal = ({ closeModal }) => {
  return (
    <Modal className="login-failed-modal" show={true} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Login Failed</Modal.Title>
      </Modal.Header>
      <Modal.Body className="login-failed-modal-body">
        <p>
          Your login attempt has failed. Please check your credentials and try
          again.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="login-failed-modal-closeBtn"
          variant="secondary"
          onClick={closeModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginFailedModal;
