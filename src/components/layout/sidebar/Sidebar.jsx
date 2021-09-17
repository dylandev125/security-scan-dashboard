import './Sidebar.scss'
import { ReactComponent as Category } from '../../../assets/category.svg'
import { ReactComponent as Home } from '../../../assets/Home.svg'
import { ReactComponent as Scan } from '../../../assets/scan.svg'
import { ReactComponent as Shield } from '../../../assets/Shield Done.svg'
import { ReactComponent as Paper } from '../../../assets/Paper.svg'
import { ReactComponent as Setting } from '../../../assets/Setting.svg'
import { ReactComponent as Support } from '../../../assets/message.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = (props) => {
  const [layState, setLayState] = useState(false)
  const userType = props.userType

  return (
    <div className='sidebar'>
      <div className="blackLay"></div>

      <div className="icon-top">
        <div className={"sidebar-link " + (props.type === 'category' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <a href='#' onClick={() => {setLayState(!layState)}}> <Category/> </a>
          </div>
        </div>
      </div>
      <div className="icon-middle">
        <div className={"sidebar-link " + (props.type === 'scan' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <Link to='/'> <Scan/> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper">WEBSITE SCAN</div>)
          }
        </div>
        <div className={"sidebar-link " + (props.type === 'dashboard' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <Link to={'/' + userType +'/dashboard'}> <Home/> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper"><Link to={'/' + userType +'/dashboard'}>DASHBOARD</Link></div>)
          }
        </div>
        {userType === 'admin' && (
          <div className={"sidebar-link " + (props.type === 'support' ? "active" : "")}>
            <div className="icon-wrapper">
              <div className="sidebar-backlay"></div>
              <Link to={'/' + userType +'/support'}> <Support/> </Link>
            </div>
            {
              layState && ( <div className="text-wrapper"><Link to={'/' + userType +'/support'}>SUPPORT</Link></div>)
            }
          </div>
        )}
        <div className={"sidebar-link " + (props.type === 'security' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <Link to={'/' + userType +'/security'}> <Shield /> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper"><Link to={'/' + userType +'/scan'}>SECURITY TESTING</Link></div>)
          }
        </div>
        <div className={"sidebar-link " + (props.type === 'billing' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <Link to={'/' + userType +'/billing'}> <Paper/> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper"><Link to={'/' + userType +'/billing'}>BILLING HISTORY</Link></div>)
          }
        </div>
      </div>
      <div className="icon-bottom">
        <div className={"sidebar-link " + (props.type === 'setting' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <Link to={'/' + userType +'/setting'}> <Setting/> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper"><Link to={'/' + userType +'/setting'}>SETTINGS</Link></div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
