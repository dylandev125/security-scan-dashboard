import React, {useState} from "react";

import OTPField from "../../../components/form/otp";
import Button from "../../../components/form/button";

const OTPLogin = (props) => {
  return(
    <div className="form">
      <OTPField name="otp" className="form-control" />
      <Button className="custom-btn custom-btn-primary" title="Verify" handleClick={props.handleOTP}/>
    </div>
  )
}

export default OTPLogin
