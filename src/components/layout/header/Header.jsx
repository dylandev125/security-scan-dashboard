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

      <div className=''>
      {props.type === 'dashboard' && (
        <Dropdown>
          <Dropdown.Toggle id='dropdown-basic' className='search-tab'>
            Website List
          </Dropdown.Toggle>

          <Dropdown.Menu>

          </Dropdown.Menu>
        </Dropdown>
      )}

      </div>
      <div className="icon-wrapper d-flex gap-5">
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
    {props.type !== 'login' && (
      <Navbar type={props.type} />
    )}
    </>
  )
}

export default Header
