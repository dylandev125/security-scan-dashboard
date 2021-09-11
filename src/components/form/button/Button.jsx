import React from "react"

const Button = (props) => {
  
  return (
    <div className={props.class} onClick={props.handleClick}>{props.title}</div>
  )
} 

export default Button