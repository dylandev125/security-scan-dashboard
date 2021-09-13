import './Sidebar.scss'
import { ReactComponent as Category } from '../../../assets/category.svg'
import { ReactComponent as Home } from '../../../assets/Home.svg'
import { ReactComponent as Scan } from '../../../assets/scan.svg'
import { ReactComponent as Shield } from '../../../assets/Shield Done.svg'
import { ReactComponent as Paper } from '../../../assets/Paper.svg'
import { ReactComponent as Setting } from '../../../assets/Setting.svg'
import { Link } from 'react-router-dom'

const Sidebar = (type) => {
  return (
    <div className='sidebar'>
      <div className="icon-top">
        <Link to='/'> <Category/> </Link>
      </div>
      <div className="icon-middle">
        <div class="sidebar-link ">
          <div class="sidebar-backlay"></div>
          <Link to='/scan'> <Scan/> </Link>
        </div>
        <div class="sidebar-link">
          <div class="sidebar-backlay"></div>
          <Link to='/'> <Home/> </Link>
        </div>
        <div class="sidebar-link active">
          <div class="sidebar-backlay"></div>
          <Link to='/'> <Shield/> </Link>
        </div>
        <div class="sidebar-link ">
          <div class="sidebar-backlay"></div>
          <Link to='/'> <Paper/> </Link>
        </div>
      </div>
      <div className="icon-bottom">
        <Link to='/'> <Setting/> </Link>
      </div>
    </div>
  )
}

export default Sidebar
