import React from "react"
import './Button.scss'

const Button = (props) => {
  
  return (
    <button className="btn-main" onClick={props.handleClick}>{props.label}</button>
  )
} 

export default Button