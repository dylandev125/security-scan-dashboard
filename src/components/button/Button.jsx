import React from "react"
import './Button.scss'

const Button = (props) => {
  
  return (
    <div className="btn-primary" onClick={props.handleClick}>{props.label}</div>
  )
} 

export default Button