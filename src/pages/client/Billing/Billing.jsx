import { useState } from 'react'
import MSortTable from '../../../components/SortTable'
import Layout from '../../../components/layout/Layout'
import Panel from '../../../components/panel'
import Button from '../../../components/button'
import CustomDatePicker from '../../../components/datepicker'
import SearchBox from '../../../components/search-box'
import { PaidData, UnpaidData } from './data'
import 'react-calendar/dist/Calendar.css';
import './Billing.scss'

const Billing = () => {
  const [tab, setTab] = useState(0);

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
                <CustomDatePicker label="All dates"/>
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