import React from "react";
import Circle from './Circle';
import Bar from './Bar';

const StepBar = (props) => {
  const steps = [];
  for(let i = 0; i < props.maxStep; i ++){
    steps.push(i);
  }

  return (
    <>
      <div className="stepbar-wrapper">
        {
          steps.map(step => (
            <>
              <Circle stepNumber={step} currentStep={props.currentStep} />
              {
                step+1 === props.maxStep ? '' : <Bar stepNumber={step} currentStep={props.currentStep}/>
              }
            </>
          ))
        }
      </div>
    </>
  )
}

export default StepBar
