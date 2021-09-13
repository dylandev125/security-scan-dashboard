import React from "react";

const Bar = (props) => {
    const primary = '#0071fb';
    return (
        <>
            <div className="step-bar" style={{
                borderColor: props.stepNumber <= props.currentStep ? primary : '#232323',
                backgroundColor: props.stepNumber <= props.currentStep ? primary : '#232323'
            }}>
            </div>
        </>
    )
}

export default Bar
