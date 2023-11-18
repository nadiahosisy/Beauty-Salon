import React from "react";

const InputComponent = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="label-input-div">
      <label className="label-register">{label}</label>
      <input
        className="input-register"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className="error-message">{error}</p>
    </div>
  );
};

export default InputComponent;
