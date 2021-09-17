import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import NormalLogin from "./steps/NormalLogin";
import OTPLogin from "./steps/OTPLogin";
import { LoginConfirmAlerts } from "../../utils/index.js";
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import "./LoginPage.scss";

const loginComponents = [NormalLogin, OTPLogin];

const LoginPage = (props) => {
  const history = useHistory();

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
    // if the user info is correct

    if (state.currentStep === loginComponents.length - 1) {
      alert("Your application was submitted" + JSON.stringify(updatedInfo));
    } else {
      setState({
        info: updatedInfo,
        currentStep: state.currentStep + 1,
      });
    }
  };

  const handleSignup = () => {
    history.push('/signup');
  };

  const handleOTP = () => {
    history.push('/customer/dashboard');
  };

  const StepComponent = loginComponents[state.currentStep];

  return (
    <>
      <Layout type='login'>
        <div className="signup-container">
          <h1>Logo</h1>
          <div className="alert">{LoginConfirmAlerts[state.currentStep]}</div>
          <StepComponent
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            handleOTP={handleOTP}
          />
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
