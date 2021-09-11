import React from "react";

const EmailField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>Email</label>
      <input
        type="email"
        name={props.name}
        className="form-control"
        placeholder="Enter Email"
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  );
};

export default EmailField;
