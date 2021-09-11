import React, {useState} from "react";
import Navbar from "./navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <Navbar visible={false}/>
    </div>
  )
}

export default Header