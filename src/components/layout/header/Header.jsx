import React, { useState } from 'react'
import Navbar from './navbar'
import { Dropdown, DropdownButton } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import { ReactComponent as NotiIcon } from '../../../assets/notification.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/profile.svg';

import './Header.scss'

const Header = (props) => {

  return (
    <>
    <div className='header'>
      <div className='logo'>Logo</div>
      {props.type === 'dashboard' && (
        <div className='d-flex justify-content-between w-100'>
          <Dropdown>
            <Dropdown.Toggle id='dropdown-basic' className='search-tab'>
              Website List
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-flex gap-5">

            <Link to='/'>
              <SearchIcon/>
            </Link>
            <Link to='/'>
              <NotiIcon/>
            </Link>
            <Link to='/'>
              <ProfileIcon/>
            </Link>
          </div>
        </div>
      )}

    </div>
    {props.type !== 'login' && (
      <Navbar type={props.type} />
    )}
    </>
  )
}

export default Header
