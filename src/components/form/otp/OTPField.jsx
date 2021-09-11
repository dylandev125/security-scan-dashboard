import React from "react";

const OTPField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>Enter the OTP generated on your 
authenticator app</label>
      <input
        type="number"
        name={props.name}
        className="form-control"
        placeholder="Enter TOTP"
      />
    </div>
  )
}

export default OTPField
