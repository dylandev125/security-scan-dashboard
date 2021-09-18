import './Setting.scss'
import { useState } from 'react'
import Layout from '../../../components/layout/Layout'
import Profile from './Profile'
import Security from './Security'
import 'react-calendar/dist/Calendar.css';

import Accounts from './main/Account'

const Setting = (props) => {
  const [nav, setNav] = useState('acc');

  const handleClick = (nav) => {
    setNav(nav);
  }

  return(
    <Layout type='setting' userType='admin' handleClick={handleClick}>
      {
        nav === 'acc' && (
          <Accounts />
        ) ||
        nav === 'pro' && (
          <Profile />
        ) ||
        nav === 'sec' && (
          <Security/>
      )}
    </Layout>
  )
}

export default Setting