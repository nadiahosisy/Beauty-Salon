import React from "react";

const InputComponent = ({ label, type, placeholder }) => {
  return (
    <div className="label-input-div">
      <label className="label-register">{label}</label>
      <input className="input-register" type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputComponent;
