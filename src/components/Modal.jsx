import React from "react";

const Modal = ({ title, children, onClose, showIcon }) => {
  return (
    <div className="modal">
      <div className="modal-content-div">
        <div className="modal-header">
          {showIcon && (
            <img
              src={
                showIcon === true
                  ? "../../public/icons/check.png"
                  : "/icons/error.png"
              }
              alt={showIcon === true ? "Check Icon" : "Error Icon"}
            />
          )}
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
