import React, { useState } from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import NormalLogin from "./steps/NormalLogin";
import OTPLogin from "./steps/OTPLogin";
import { LoginConfirmAlerts } from "../../utils/index.js";
import "./LoginPage.scss";

const loginComponents = [NormalLogin, OTPLogin];

const LoginPage = (props) => {
  const [state, setState] = useState({
    currentStep: 0,
    info: {},
  });

  const handleLogin = (form) => {
    const updatedInfo = {
      ...state.info,
      ...form,
    };

    // get the user info to Server
    // if the user info is correctt

    if (state.currentStep === loginComponents.length - 1) {
      alert("Your application was submitted" + JSON.stringify(updatedInfo));
    } else {
      setState({
        info: updatedInfo,
        currentStep: state.currentStep + 1,
      });
    }
  };

  const handleSignup = () => {};

  const handleOTP = () => {};

  const StepComponent = loginComponents[state.currentStep];

  return (
    <>
      <Header />
      <div className="signup-container">
        <h1>Logo</h1>
        <div className="alert">{LoginConfirmAlerts[state.currentStep]}</div>
        <StepComponent
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          handleOTP={handleOTP}
        />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
