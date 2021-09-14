import React, { useState } from "react";
import { ReactComponent as Issue } from '../../../../assets/issue.svg'
import { ReactComponent as Plan } from '../../../../assets/plan.svg'
import './Navbar.scss'

const Navbar = (props) => {
  const [navState, setNavState] = useState(
    props.type === 'setting' && 'acc' ||
    props.type === 'security' && 'scan'
    )

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
          <div className='navItem active'><span className='nav-title-payment active'>PAYMENT HISTORY</span></div>
        ) ||
        props.type === 'security' && (
          <>
            <div className={'navItem ' + (navState === 'scan' ? 'active' : '')} onClick={()=>{props.handleClick(0); setNavState('scan')}}>
              <span className={'nav-title-payment ' + (navState === 'scan' ? 'active' : '')}>SECURITY SCAN</span>
            </div>
            <div className={'navItem ' + (navState === 'hist' ? 'active' : '')} onClick={()=>{props.handleClick(1); setNavState('hist')}}>
              <span className={'nav-title-payment ' + (navState === 'hist' ? 'active' : '')}>HISTORY</span>
            </div>
          </>
        ) ||
        props.type === 'setting' && (
        <>
          <div className={'navItem ' + (navState === 'acc' ? 'active' : '')} onClick={() => {props.handleClick('acc'); setNavState('acc')}}>
            <span className={'nav-title-payment ' + (navState === 'acc' ? 'active' : '')}>ACCOUNT INFORMATION</span>
          </div>
          <div className={'navItem ' + (navState === 'sec' ? 'active' : '')} onClick={() => {props.handleClick('sec'); setNavState('sec')}}>
            <span className={'nav-title-payment ' + (navState === 'sec' ? 'active' : '')}>SECURITY</span>
          </div>
          <div className={'navItem ' + (navState === 'pay' ? 'active' : '')} onClick={() => {props.handleClick('pay'); setNavState('pay')}}>
            <span className={'nav-title-payment ' + (navState === 'pay' ? 'active' : '')}>PAYMENTS AND ORDERS</span>
          </div>
          <div className={'navItem ' + (navState === 'sup' ? 'active' : '')} onClick={() => {props.handleClick('sup'); setNavState('sup')}}>
            <span className={'nav-title-payment ' + (navState === 'sup' ? 'active' : '')}>SUPPORT</span>
          </div>
        </>
      )
      }
    </div>
  )
}

export default Navbar