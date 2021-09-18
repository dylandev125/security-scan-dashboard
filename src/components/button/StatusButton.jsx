import React from "react"
import { DropdownButton, Dropdown } from "react-bootstrap"
import './Button.scss'

const StatusButton = (props) => {
    return (
        <>
            <DropdownButton id={props.id} className="dropdown-service" title="Not selected">
                <Dropdown.Item><span style={{ color: "#232323" }}>Not selected</span></Dropdown.Item>
                <Dropdown.Item><span style={{ color: "#088d3d" }}>Activated</span></Dropdown.Item>
                <Dropdown.Item><span style={{ color: "#f22d50" }}>Rejected</span></Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default StatusButton