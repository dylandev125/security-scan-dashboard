import React from "react"
import { ReactComponent as DropdownIcon } from '../../assets/dropdown-i.svg'
import { DropdownButton, Dropdown } from "react-bootstrap"
import './Button.scss'

const PaginationButton = (props) => {

    return (
        <>
            <DropdownButton id="dropdown-pagination-button" title="Show 1-10">
                <Dropdown.Item>Show 1-10&nbsp;&nbsp;</Dropdown.Item>
                <Dropdown.Item>Show 11-20</Dropdown.Item>
                <Dropdown.Item>Show 21-30</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default PaginationButton