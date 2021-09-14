import React, { useState } from "react";
import InputGroup from "../../../components/form/input-group";
import Button from "../../../components/form/button";
import './FinalStep.scss';

const FinalStep = (props) => {
    const handleChange = e => {
        console.log(e.target.value);
    }

    return (
        <>
            <div className="form">
                <div class="received-notification">
                    <div>We recieved your Sign Up form.</div>
                    <div>We will approve your form within <strong>24h</strong></div>
                </div>
                <div class="why-to-wait">Why do I have to wait?</div>
                <div class="what-for">
                    Our platform is welcomed for healthy clients
                    &nbsp;who care about security and privacy.<br></br>
                    We want to bring the best experience<br></br>
                    for our clients.
                </div>
            </div>
        </>
    )
}

export default FinalStep
