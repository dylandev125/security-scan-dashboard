import { useState } from 'react'
import Layout from '../../../components/layout/Layout'
import { ReactComponent as Date } from '../../../assets/date.svg'
import { ReactComponent as Search } from '../../../assets/edit-search.svg'
import './Billing.scss'

const Billing = () => {
  const [ispaid, setPaid] = useState('all');

  return (
    <Layout type={'billing'}>
      <div className='billing-wrapper'>
        <div className="payment-history">

          <div className="topTitle"><span className="topTitle-text">HISTORY</span></div>

          <div className="payment-header">

            <button className="payment-action"><Date/>All Dates</button>
            <button onClick={() => {setPaid('paid')}} className={"payment-action " + (ispaid==='paid' ? 'active' : '')}>Paid</button>
            <button onClick={() => {setPaid('unpaid')}} className={"payment-action " + (ispaid==='unpaid' ? 'active' : '')}>Unpaid</button>

            <div className="searchBar">
              <Search/>
              <input type="text" className="search-edit" placeholder='Search something...'></input>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Billing;