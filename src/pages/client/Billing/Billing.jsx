import { useState } from 'react'
import SortableTable from 'react-sortable-table';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MSortTable from '../../../components/SortTable'
import Layout from '../../../components/layout/Layout'
import Panel from '../../../components/panel'
import Button from '../../../components/button'
import SearchBox from '../../../components/search-box'
import { ReactComponent as DateIcon } from '../../../assets/date.svg'
import { ReactComponent as DropdownIcon } from '../../../assets/dropdown-i.svg'
import { PaidData, UnpaidData } from './data'
import './Billing.scss'

const Billing = () => {
  const [tab, setTab] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const handleClick = (tabIndex) => {
    setTab(tabIndex);
  }
  const datas = [PaidData, UnpaidData];
  const curData = datas[tab];
  return (
    <Layout type={'billing'}>
      <div className='billing-wrapper'>
        <Panel>
          <div className="billing-header">
            <div className="button-group">
              <div className="datepicker-wrapper">
                <DateIcon />
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <DropdownIcon />
              </div>
              <Button label="Paid" handleClick={() => handleClick(0)} />
              <Button label="Unpaid" handleClick={() => handleClick(1)} />
            </div>
            <div className="billing-search-box">
              <SearchBox />
            </div>
          </div>
          <MSortTable columns={curData.columns} rows={curData.data} defaultSorting={curData.columns[0].key} />
        </Panel>
        <div className="ribon">HISTORY</div>
      </div>
    </Layout>
  )
}

export default Billing;