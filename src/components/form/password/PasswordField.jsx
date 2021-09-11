import React from "react";

const PasswordField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>Password</label>
      <input
        type="password"
        name={props.name}
        className="form-control"
        placeholder="Enter Password"
      />
    </div>
  )
}

export default PasswordField
