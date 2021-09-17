import React from "react"
import { DropdownButton, Dropdown } from "react-bootstrap"
import './DropDown.scss'

const DropDown = (props) => {

  return (
    <>
      <DropdownButton id={props.id} title={props.title}>
        { props.children }
      </DropdownButton>
    </>
  )
}

export default DropDown