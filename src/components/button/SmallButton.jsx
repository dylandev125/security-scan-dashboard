import React from "react"
import './Button.scss'

const SmallButton = (props) => {
  
  return (
    <button className="btn-main small" onClick={props.handleClick}>{props.children}</button>
  )
} 

export default SmallButton