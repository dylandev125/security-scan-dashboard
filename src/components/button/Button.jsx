import React from "react"
import './Button.scss'

const Button = (props) => {
  return (
    <button className={"btn-main " + (props.className || '') } onClick={props.handleClick}>{props.label}</button>
  )
} 

export default Button