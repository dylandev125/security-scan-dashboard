import Button from '../../../components/button'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import { ReactComponent as Back } from '../../../assets/back.svg'
import InfoRow from '../../../components/InfoRow/InfoRow'
import SmallButton from '../../../components/button/SmallButton'
import { useState } from 'react'
import Accounts from './main/Account'
import Profile from './Profile'
import Security from './Security'
import { useHistory } from 'react-router'
import CustomInput from '../../../components/custom-input'
import './Setting.scss'

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
          <InfoRow title="Company" content = <CustomInput text="Lucreds Inc." /> />
          <InfoRow title="Reg. Number" content = <CustomInput text="EE12345678" /> />
          <InfoRow title="Address" content= <CustomInput text="Meistri 16, Haabersti, Tallinn 13517 EE"/> />
          <InfoRow title="Company Size" content= <CustomInput text="Small Company" /> />
        </div>

        <div className="box-info">
          <span className="big-caption">Contact Information</span>
          <span className="small-text">Contact information is private information, that is not visible to other users.</span>
          <InfoRow title="Full Name" content=<CustomInput text="Allan Nalla" /> />
          <InfoRow title="CMO" content=<CustomInput text="Allan Nalla" /> />
          <InfoRow title="Phone" content=<CustomInput text="+372 555 55 555"/> />
          <InfoRow title="Email"
            content=<CustomInput text={'allan@lucreds.com'} /> />
        </div>

        <div className="box-info">
          <div className="website-info-header">
            <div className="website-info-text">
              <span className="big-caption">Website Information</span>
              <span className="small-text">Here you can add and edit website lists.</span>
            </div>
            <Button label="Add"/>
          </div>
          <InfoRow className="adduser-inforow" title="Website" content={<CustomInput />} dropdown={{btnlabel: 'Verified'}} btn="Edit" />
        </div>

        <div className="footer-btn">
          <button className='save-btn'>Save</button>
        </div>
      </div>
    </Layout>
  )
}

export default AccountSelect