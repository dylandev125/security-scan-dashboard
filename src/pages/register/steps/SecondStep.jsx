import React, { useState } from "react";
import InputGroup from "../../../components/form/input-group";
import Button from "../../../components/form/button";

const SecondStep = (props) => {
    const handleChange = e => {
        console.log(e.target.value);
    }

    return (
        <>
            <div className="form">
                <InputGroup
                    type="text"
                    placeholder="www.example.com"
                    label="Website" name="website"
                    className="form-control"
                    handleChange={handleChange} />
                <InputGroup
                    type="text"
                    placeholder="Enter Your name"
                    label="Name" name="name"
                    className="form-control"
                    handleChange={handleChange} />
                <InputGroup
                    type="text"
                    placeholder="Enter Company name"
                    label="Company" name="company"
                    className="form-control"
                    handleChange={handleChange} />
                <InputGroup
                    type="text"
                    placeholder="Enter Your Company position"
                    label="Position" name="position"
                    className="form-control"
                    handleChange={handleChange} />
                <Button class="btn btn-primary" title="Next" handleClick={props.handleNext} />
            </div>
        </>
    )
}

export default SecondStep
