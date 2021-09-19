import Button from '../../../components/button'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import { ReactComponent as Back } from '../../../assets/back.svg'
import InfoRow from '../../../components/InfoRow/InfoRow'
import SmallButton from '../../../components/button/SmallButton'
import { useState } from 'react'
import './Setting.scss'
import Accounts from './main/Account'
import Profile from './Profile'
import Security from './Security'
import { useHistory } from 'react-router'

const AccountSelect = () => {
  const history = useHistory();
  const [nav, setNavState] = useState('')
  const NavClick = (nav) => {
    setNavState(nav)
  }
  return (
    <Layout type='setting' userType='admin' handleClick={NavClick}>
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
      <div className="setting-wrapper">

        <div className="box-info">
          <div className="btn-back"><Link to='/admin/setting'><SmallButton><Back/></SmallButton></Link></div>
          <span className="big-caption">User #000123</span>
          <span className="small-text">Example LLC</span>
          <InfoRow title="Company" content="Lucreds Inc." btn="Edit" />
          <InfoRow title="Reg. Number" content="EE12345678" btn="Edit" />
          <InfoRow title="Address" content="Meistri 16, Haabersti, Tallinn 13517 EE" btn="Edit" />
          <InfoRow title="Company Size" content="Small Company" btn="Edit" />
        </div>

        <div className="box-info">
          <span className="big-caption">Contact Information</span>
          <span className="small-text">Contact information is private information, that is not visible to other users.</span>
          <InfoRow title="Full Name" content="Allan Nalla" btn="Edit" />
          <InfoRow title="CMO" content="Allan Nalla" btn="Edit" />
          <InfoRow title="Phone" content="+372 555 55 555" btn="Edit" />
          <InfoRow title="Email"
            content={<>allan@lucreds.com<span style={{marginLeft: '10px'}} className="text-muted">Primary</span></>}
            btn="Edit" />
        </div>

        <div className="box-info">
          <span className="big-caption">Website Information</span>
          <span className="small-text">Here you can add and edit website lists.</span>
          <InfoRow title="Website" content="https://www.example.com" dropdown={{btnlabel:'Verified'}} btn="Edit" />
        </div>

        <div className="footer-btn">
          <button className='save-btn'>Save</button>
        </div>
      </div>
    </Layout>
  )
}

export default AccountSelect