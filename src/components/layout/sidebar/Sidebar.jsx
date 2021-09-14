import './Sidebar.scss'
import { ReactComponent as Category } from '../../../assets/category.svg'
import { ReactComponent as Home } from '../../../assets/Home.svg'
import { ReactComponent as Scan } from '../../../assets/scan.svg'
import { ReactComponent as Shield } from '../../../assets/Shield Done.svg'
import { ReactComponent as Paper } from '../../../assets/Paper.svg'
import { ReactComponent as Setting } from '../../../assets/Setting.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = (props) => {
  const [layState, setLayState] = useState(false)
  console.log(layState)

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
            <Link to='/dashboard'> <Home/> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper"><Link to='/dashboard'>DASHBOARD</Link></div>)
          }
        </div>
        <div className={"sidebar-link " + (props.type === 'security' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <Link to='/scan'> <Shield /> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper"><Link to='/scan'>SECURITY TESTING</Link></div>)
          }
        </div>
        <div className={"sidebar-link " + (props.type === 'billing' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <Link to='/billing'> <Paper/> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper"><Link to='/billing'>BILLING HISTORY</Link></div>)
          }
        </div>
      </div>
      <div className="icon-bottom">
        <div className={"sidebar-link " + (props.type === 'setting' ? "active" : "")}>
          <div className="icon-wrapper">
            <div className="sidebar-backlay"></div>
            <Link to='/setting'> <Setting/> </Link>
          </div>
          {
            layState && ( <div className="text-wrapper"><Link to='/setting'>SETTINGS</Link></div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
