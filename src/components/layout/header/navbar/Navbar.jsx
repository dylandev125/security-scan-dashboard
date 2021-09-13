import React, { useState } from "react";
import { ReactComponent as Issue } from '../../../../assets/issue.svg'
import { ReactComponent as Plan } from '../../../../assets/plan.svg'
import './Navbar.scss'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      {
        props.type === 'dashboard' && (
          <>
            <div className='navItem'><Issue /><span className='nav-title'>NEW ISSUES</span> <span className='value-text'>0</span></div>
            <div className='navItem'><Plan /><span className='nav-title'>PLAN</span>        <span className='value-text'>STANDARD</span> </div>
          </>
        ) ||
        props.type === 'billing' && (
          <div className='navItem'><span className='nav-title-payment'>PAYMENT HISTORY</span></div>
        ) ||
        props.type === 'security' && (
          <>
            <div className='navItem' onClick={()=>{props.handleClick(0)}}><span className='nav-title'>SECURITY SCAN</span></div>
            <div className='navItem' onClick={()=>{props.handleClick(1)}}><span className='nav-title'>HISTORY</span></div>
          </>
        )
      }
    </div>
  )
}

export default Navbar