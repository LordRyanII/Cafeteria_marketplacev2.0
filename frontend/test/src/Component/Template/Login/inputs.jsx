import React from "react";

function Input({ type, id, placeholder, value, onChange }) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
}

export default Input;
