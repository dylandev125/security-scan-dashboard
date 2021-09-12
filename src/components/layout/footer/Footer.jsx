import React from "react"
import "./Footer.scss"

const Footer = (props) => {
  return (
    <div className={(props.type === 'login' ?  "login-footer":"footer")}>
      Company Name © 2021 | All Rights Reserved.
    </div>
  )
}

export default Footer