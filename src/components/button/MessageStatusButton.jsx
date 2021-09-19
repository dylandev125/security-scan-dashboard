import React from "react"
import { DropdownButton, Dropdown } from "react-bootstrap"
import './Button.scss'

const StatusButton = (props) => {
    return (
        <>
            <DropdownButton id={props.id} className="dropdown-message-status" title="Not selected">
                <Dropdown.Item><span style={{ color: "#ea8942" }}>Under review</span></Dropdown.Item>
                <Dropdown.Item><span style={{ color: "#0071fb" }}>Replyed</span></Dropdown.Item>
                <Dropdown.Item><span style={{ color: "#37b96b" }}>Closed</span></Dropdown.Item>
                <Dropdown.Item><span style={{ color: "#0071fb" }}>Customer reply</span></Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default StatusButton