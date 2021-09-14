import React, {useState} from "react";

import EmailField from "../../../components/form/email";
import PasswordField from "../../../components/form/password";
import ForgotPassword from "../../../components/form/forgot-password";
import Button from "../../../components/form/button";

const NormalLogin = (props) => {
  const handleChange = (e) => {
    console.log(e.target);
  }

  const handleSignup = (e) => {

  }

  return (
    <div className="form">
      <EmailField name="email" className="form-control" handleChange={handleChange} />
      <PasswordField name="password" className="form-control" handleChange={handleChange}/>
      <ForgotPassword />
      <Button className="custom-btn custom-btn-primary" title="Log In" handleClick={props.handleLogin}/>
      <div className="or-line">
        <div></div>
        <div className="text">or</div>
        <div></div>
      </div>
      <Button className="custom-btn mt-2-5" title="Sign Up for Free" handleClick={props.handleSignup}/>
    </div>
  )
}

export default NormalLogin