import React, { useState } from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { SignupConfirmAlerts } from "../../utils/index.js";
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import FinalStep from './steps/FinalStep';
import StepBar from '../../components/form/stepbar';
import './SignupPage.scss'

const stepComponents = [
  FirstStep,
  SecondStep,
  FinalStep,
]

const SignupPage = () => {
  const [state, setState] = useState({
    currentStep: 0,
    info: {},
  })

  const goToPrevious = () => {
    setState({
      ...state,
      currentStep: state.currentStep - 1,
    })
  }

  const goToNext = (e) => {
    console.log('next clicked');
    const updatedInfo = {
      ...state.info,
    }

    if (state.currentStep === stepComponents.length-2) {
      alert('Your application was submitted' + JSON.stringify(updatedInfo));
      setState({
        info: updatedInfo,
        currentStep: state.currentStep + 1,
      })
    } else {
      setState({
        info: updatedInfo,
        currentStep: state.currentStep + 1,
      })
    }
  }

  const StepComponent = stepComponents[state.currentStep]

  return (
    <>
      <Header />
      <div className="signup-container">
        <h1>Logo</h1>
        <div className="alert">{SignupConfirmAlerts[state.currentStep]}</div>
        <StepBar maxStep={3} currentStep={state.currentStep} />
        <StepComponent info={state.info} handleNext={goToNext} />
      </div>
      <Footer />
    </>
  )
}

export default SignupPage
