import './Sidebar.scss'
import { ReactComponent as Category } from '../../../assets/category.svg'
import { ReactComponent as Home } from '../../../assets/Home.svg'
import { ReactComponent as Scan } from '../../../assets/scan.svg'
import { ReactComponent as Shield } from '../../../assets/Shield Done.svg'
import { ReactComponent as Paper } from '../../../assets/Paper.svg'
import { ReactComponent as Setting } from '../../../assets/Setting.svg'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <div className="icon-top">
        <div className={"sidebar-link " + (props.type === 'category' ? "active" : "")}>
          <div className="sidebar-backlay"></div>
          <Link to='/'> <Category/> </Link>
        </div>
      </div>
      <div className="icon-middle">
        <div className={"sidebar-link " + (props.type === 'scan' ? "active" : "")}>
          <div className="sidebar-backlay"></div>
          <Link to='/'> <Scan/> </Link>
        </div>
        <div className={"sidebar-link " + (props.type === 'dashboard' ? "active" : "")}>
          <div className="sidebar-backlay"></div>
          <Link to='/dashboard'> <Home/> </Link>
        </div>
        <div className={"sidebar-link " + (props.type === 'security' ? "active" : "")}>
          <div className="sidebar-backlay"></div>
          <Link to='/'> <Shield/> </Link>
        </div>
        <div className={"sidebar-link " + (props.type === 'billing' ? "active" : "")}>
          <div className="sidebar-backlay"></div>
          <Link to='/billing'> <Paper/> </Link>
        </div>
      </div>
      <div className="icon-bottom">
        <div className={"sidebar-link " + (props.type === 'setting' ? "active" : "")}>
          <div className="sidebar-backlay"></div>
          <Link to='/setting'> <Setting/> </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
