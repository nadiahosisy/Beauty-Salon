import React from "react";

const Modal = ({ title, children, onClose, showIcon, closeScheduler }) => {
  const handleClose = () => {
    if (onClose) onClose();

    if (showIcon === "Ok" && closeScheduler) {
      closeScheduler();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content-div">
        <div className="modal-header">
          {showIcon && (
            <img
              src={
                showIcon === "Ok"
                  ? "../public/icons/check.png"
                  : "../public/icons/error.png"
              }
              alt={showIcon === "Ok" ? "Check Icon" : "Error Icon"}
            />
          )}
          <h2 className="modal-header-h2">{title}</h2>
        </div>
        <div className="modal-body">{children}</div>
        <div className="scheduler-modal-close-btn-div">
          <button className="close-btn" onClick={handleClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
