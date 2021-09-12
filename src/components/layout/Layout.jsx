import { useState } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'
import './Layout.scss'

const Layout = (props) => {
  return (
    <>
      {props.type !== 'login' &&
        <Sidebar type={props.type} />
      }
      <div className={(props.type === 'login' ? "login-main-layout" : "main-layout")}>
        <Header type={props.type} />
        {props.children}
        <Footer type={props.type} />
      </div>
    </>
  )
}

export default Layout
