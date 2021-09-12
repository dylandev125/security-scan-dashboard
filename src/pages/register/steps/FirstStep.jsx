import React, { useState } from "react";
import InputGroup from "../../../components/form/input-group";
import Button from "../../../components/form/button";
import { Form } from "react-bootstrap";
import './FirstStep.scss';

const FirstStep = (props) => {
    const handleChange = e => {
        console.log(e.target.value);
    }

    return (
        <>
            <div className="form">
                <InputGroup
                    type="email"
                    placeholder="Write Email"
                    label="Email" name="email"
                    className="form-control"
                    handleChange={handleChange} />
                <InputGroup
                    type="password"
                    placeholder="Write Password"
                    label="Password"
                    name="password"
                    className="form-control"
                    handleChange={handleChange} />
                <InputGroup
                    type="password"
                    placeholder="Write Re-Password"
                    name="re-password"
                    label="Re-Password"
                    className="form-control"
                    handleChange={handleChange} />
                <InputGroup
                    type="text"
                    placeholder="Invitation code"
                    name="inv-code"
                    label="Enter Invitation Code"
                    extraLabel="Fill only if you have code"
                    className="form-control"
                    handleChange={handleChange} />
                <Form.Check className="terms-check" type="checkbox" label="I agree to the Terms of Service and Privacy Policy. " />
                <Button class="btn btn-primary" title="Next" handleClick={props.handleNext} />
            </div>
        </>
    )
}

export default FirstStep
