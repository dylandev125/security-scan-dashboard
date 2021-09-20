import Button from '../../../components/button'
import CustomInput from '../../../components/custom-input'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import { ReactComponent as Back } from '../../../assets/back.svg'
import InfoRow from '../../../components/InfoRow/InfoRow'
import SmallButton from '../../../components/button/SmallButton'
import WebsiteListItem from '../../client/Setting/AccountInfo/WebsiteListItem'
import { useState } from 'react'
import Accounts from './main/Account'
import Profile from './Profile'
import Security from './Security'
import { useHistory } from 'react-router'
import './Setting.scss'

const AddUser = () => {
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
          <span className="big-caption">Account Type</span>
          <div className="btn-back"><Link to='/admin/setting'><SmallButton><Back/></SmallButton></Link></div>
          <div className="choose-type">
            <Button label='Client'/>
            <Button label='Admin'/>
          </div>
        </div>

        <div className="box-info">
          <span className="big-caption">Plan Type</span>
          <div className="choose-type">
            <Button label='Standard'/>
            <Button label='Premium'/>
          </div>
        </div>

        <div className="box-info">
          <span className="big-caption">Company Information</span>
          <InfoRow title="Company" content=<CustomInput /> />
          <InfoRow title="Reg. Number" content=<CustomInput /> />
          <InfoRow title="Address" content=<CustomInput /> />
          <InfoRow title="Company Size" content=<CustomInput /> />
        </div>

        <div className="box-info">
          <span className="big-caption">Contact Information</span>
          <span className="small-text">Contact information is private information, that is not visible to other users.</span>
          <InfoRow title="Full Name" content=<CustomInput /> />
          <InfoRow title="CMO" content=<CustomInput /> />
          <InfoRow title="Phone" content=<CustomInput /> />
          <InfoRow title="Email" content=<CustomInput /> />
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

export default AddUser