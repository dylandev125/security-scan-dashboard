import React from "react"
import { DropdownButton, Dropdown } from "react-bootstrap"
import './Button.scss'

const ServiceButton = (props) => {

    return (
        <>
            <DropdownButton id={props.id} className="dropdown-service" title="Premium">
                <Dropdown.Item><span style={{color: "#0071fb" }}>Premium</span></Dropdown.Item>
                <Dropdown.Item><span style={{color: "#f22d50" }}>Standard</span></Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default ServiceButton