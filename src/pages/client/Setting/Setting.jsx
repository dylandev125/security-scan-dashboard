import React, { useState } from "react"
import Layout from '../../../components/layout/Layout'
import AccountInfo from './AccountInfo/AccountInfo'
import Payments from './Payments/Payments'
import Security from './Security/Security'
import Support from './Support/Support'
import './Setting.scss'

const Setting = () => {
  const [currentComp, setCurrentComp] = useState('acc');

  const handleClick = (nav) => {
    setCurrentComp(nav)
  }
  return (
    <Layout type={'setting'} handleClick={handleClick}>
      {
        currentComp === 'acc' && (
          <AccountInfo />
        ) ||
        currentComp === 'pay' && (
          <Payments />
        ) ||
        currentComp === 'sec' && (
          <Security />
        ) ||
        currentComp === 'sup' && (
          <Support />
        )
      }
    </Layout>
  )
}

export default Setting