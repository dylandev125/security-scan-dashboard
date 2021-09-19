import { useState, useEffect } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'
import './Layout.scss'

const Layout = (props) => {
  console.log(props.handleClick)
  useEffect(() => {
    console.log(props.handleClick)
  }, [props])
  return (
    <>
      {props.type !== 'login' &&
        <Sidebar type={props.type} userType={props.userType}/>
      }
      <div className={(props.type === 'login' ? "login-main-layout" : "main-layout")}>
        <Header type={props.type} userType={props.userType} handleClick={props.handleClick} />
        {props.children}
        <Footer type={props.type} />
      </div>
    </>
  )
}

export default Layout
