import './Setting.scss'
import { useState } from 'react'
import Layout from '../../../components/layout/Layout'
import Panel from '../../../components/panel'
import MSortTable from '../../../components/SortTable'
import Button from '../../../components/button'
import CustomDatePicker from '../../../components/datepicker'
import SearchBox from '../../../components/search-box'
import { PaidData, UnpaidData } from './data'
import 'react-calendar/dist/Calendar.css';

import AddUser from './AddUser'

const Setting = () => {
  const [tab, setTab] = useState(0);

  const handleClick = (tabIndex) => {
    setTab(tabIndex);
  }
  const datas = [PaidData, UnpaidData];
  const curData = datas[tab];
  return (
    <AddUser />
  )
}

export default Setting