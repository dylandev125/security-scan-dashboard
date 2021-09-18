import React from "react"
import { DropdownButton, Dropdown } from "react-bootstrap"
import './Button.scss'

const ExpiresInButton = (props) => {

    return (
        <>
            <DropdownButton className="dropdown-expires-in" title="24h">
                <Dropdown.Item>24h</Dropdown.Item>
                <Dropdown.Item>48h</Dropdown.Item>
                <Dropdown.Item>72h</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default ExpiresInButton