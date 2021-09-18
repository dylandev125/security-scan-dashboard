import './Setting.scss'
import { useState } from 'react'
import Layout from '../../../components/layout/Layout'
import Profile from './Profile'
import Security from './Security'
import 'react-calendar/dist/Calendar.css';

import AddUser from './AddUser'

const Setting = () => {
  const [nav, setNav] = useState('acc');

  const onhandleClick = (nav) => {
    setNav(nav);
  }

  return(
    <Layout type='setting' userType='admin' handleClick={onhandleClick}>
      {
        nav === 'acc' && (
          <AddUser />
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