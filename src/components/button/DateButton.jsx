import React from "react"
import { ReactComponent as DateIcon } from '../../assets/date.svg'
import { ReactComponent as DropdownIcon } from '../../assets/dropdown-i.svg'
import './Button.scss'

const DateButton = (props) => {
  return (
    <button className="btn-main btn-date" onClick={props.handleClick}>
      <DateIcon />
      {props.label}
      <DropdownIcon />
    </button>
  )
}

export default DateButton