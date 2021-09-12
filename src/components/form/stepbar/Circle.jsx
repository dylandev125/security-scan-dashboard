import React from "react";

const Circle = (props) => {
    const primary = '#0071fb';
    return (
        <>
            <div className="step-circle" style={{
                backgroundColor: props.stepNumber <= props.currentStep ? primary : 'white',
                borderColor: props.stepNumber <= props.currentStep ? primary : '#232323',
                color: props.stepNumber <= props.currentStep ? 'white' : '#232323',
            }}>
                <span>{props.stepNumber+1}</span>
            </div>
        </>
    )
}

export default Circle
