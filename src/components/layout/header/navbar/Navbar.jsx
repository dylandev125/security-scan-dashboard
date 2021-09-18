import React, { useState } from "react";
import { ReactComponent as Issue } from '../../../../assets/issue.svg'
import { ReactComponent as Plan } from '../../../../assets/plan.svg'
import { ReactComponent as User1 } from '../../../../assets/24hour.svg'
import { ReactComponent as User2 } from '../../../../assets/7days.svg'
import { ReactComponent as Total } from '../../../../assets/total.svg'
import { ReactComponent as Request } from '../../../../assets/request.svg'
import { ReactComponent as Money } from '../../../../assets/coin.svg'
import './Navbar.scss'

const Navbar = (props) => {
  const [navState, setNavState] = useState(
    props.type === 'setting' && 'acc' ||
    props.type === 'security' && 'scan');

  return (
    <div className='navbar'>
      {props.userType==='customer' && (
          props.type === 'dashboard' && (
            <>
              <div className='navItem active'><Issue /><span className='nav-title'>NEW ISSUES</span> <span className='value-text'>0</span></div>
              <div className='navItem active'><Plan /><span className='nav-title'>PLAN</span>        <span className='value-text'>STANDARD</span> </div>
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
      ) ||


      props.userType==='admin' && (
        (props.type === 'dashboard' || props.type === 'security') && (
          <>
            <div className='navItem active'><User1 /><span className='nav-title'>NEW USERS</span> <span className='value-text'>24</span></div>
            <div className='navItem active'><User2 /><span className='nav-title'>NEW USERS</span> <span className='value-text'>349</span></div>
            <div className='navItem active'><Total /><span className='nav-title'>TOTAL</span>        <span className='value-text'>3985</span> </div>
          </>
        ) ||
        props.type === 'billing' && (
          <>
            <div className='navItem active'><User1 /><span className='nav-title'>NEW PURCHASES</span> <span className='value-text'>20</span></div>
            <div className='navItem active'><Request /><span className='nav-title'>INVOICES REQUESET</span> <span className='value-text'>30</span></div>
            <div className='navItem active'><Total /><span className='nav-title'>PREMIUM</span>        <span className='value-text'>2140</span> </div>
            <div className='navItem active'><Money /><span className='nav-title'>TOTAL</span>        <span className='value-text'>148,923.00 €
</span> </div>
          </>
        ) ||
        props.type === 'support' && (
          <>
            <div className='navItem active'><User1 /><span className='nav-title'>NEW ENQUIRES</span> <span className='value-text'>24</span></div>
            <div className='navItem active'><User2 /><span className='nav-title'>TOTAL ENQUIRES</span> <span className='value-text'>349</span></div>
          </>
        ) ||

        props.type === 'setting' && (
        <>
          {
            console.log('I came here.')
          }
          <div className={'navItem ' + (navState === 'acc' ? 'active' : '')} onClick={() => {props.handleClick('acc');setNavState('acc') }}>
            <span className={'nav-title-payment ' + (navState === 'acc' ? 'active' : '')}>ACCOUNTS</span>
          </div>
          <div className={'navItem ' + (navState === 'pro' ? 'active' : '')} onClick={() => {props.handleClick('pro');setNavState('pro')}}>
            <span className={'nav-title-payment ' + (navState === 'pro' ? 'active' : '')}>PROFILE</span>
          </div>
          <div className={'navItem ' + (navState === 'sec' ? 'active' : '')} onClick={() => {props.handleClick('sec');setNavState('sec')}}>
            <span className={'nav-title-payment ' + (navState === 'sec' ? 'active' : '')}>SECURITY</span>
          </div>
        </>
        )
      )}
    </div>
  )
}

export default Navbar