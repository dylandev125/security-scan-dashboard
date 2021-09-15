import React from "react"

const Button = (props) => {
  
  return (
    <div className={props.className} onClick={props.handleClick}>{props.title}</div>
  )
} 

export default Button