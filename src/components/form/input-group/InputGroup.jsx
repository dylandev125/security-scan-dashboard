import React from "react";

const InputGroup = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <label className="muted">{props.extraLabel}</label>
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default InputGroup
