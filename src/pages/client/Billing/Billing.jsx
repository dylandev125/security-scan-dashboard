import { useState } from 'react'
import SortableTable from 'react-sortable-table';
import MSortTable from '../../../components/SortTable'
import Layout from '../../../components/layout/Layout'
import Panel from '../../../components/panel'
import Button from '../../../components/button'
import { ReactComponent as Date } from '../../../assets/date.svg'
import { ReactComponent as Search } from '../../../assets/edit-search.svg'
import { PaidData, UnpaidData } from './data'
import './Billing.scss'

const Billing = () => {
  const [state, setState] = useState({
    tab: 0,
  });

  const datas = [PaidData, UnpaidData];
  const curData = datas[state.tab];

  return (
    <Layout type={'billing'}>
      <div className='billing-wrapper'>
        <Panel>
          <div className="billing-header">
            <div className="button-group">
              <Button label="All Dates"/>
              <Button label="Paid"/>
              <Button label="UnPaid"/>
            </div>
            
          </div>
          <MSortTable columns={curData.columns} rows={curData.data} defaultSorting={curData.columns[0].key}/>
        </Panel>
        <div className="ribon">HISTORY</div>
      </div>
    </Layout>
  )
}

export default Billing;