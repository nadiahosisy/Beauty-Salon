import React from "react";

const ICON_PATHS = {
  Ok: "/icons/check.png",
  Error: "/icons/error.png",
  Warning: "/icons/warning.png",
};

const Modal = ({ title, children, onClose, showIcon, closeScheduler }) => {
  const handleClose = () => {
    if (onClose) onClose();
    if (showIcon === "Ok" && closeScheduler) {
      closeScheduler();
    }
  };

  const getIconPath = (iconType) => {
    return ICON_PATHS[iconType] || ICON_PATHS.Error;
  };

  const getIconAlt = (iconType) => {
    switch (iconType) {
      case "Ok":
        return "Check Icon";
      case "Warning":
        return "Warning Icon";
      default:
        return "Error Icon";
    }
  };

  const iconStyle = {
    width: "30px",
    height: "30px",
    objectFit: "contain",
  };

  return (
    <div className="modal">
      <div className="modal-content-div">
        <div className="modal-header">
          {showIcon && (
            <img
              style={iconStyle}
              src={getIconPath(showIcon)}
              alt={getIconAlt(showIcon)}
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
