import Layout from '../../../components/layout/Layout'
import BaseTable from "../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData } from "./PageBuilder";
import './Payments.scss'

const Payments = () => {
  return (
    <Layout type='billing' userType='admin'>
      <BaseTable
        className="payment-wrapper"
        hasSearchBox
        ribon="INVOICE"
        filters={['Paid', 'Canceled', 'Expired', 'Invoice request', 'Invoice sent']}
        tableHeader={[{ prefix: 'd' }, { prefix: 'p' }, { prefix: 'm' }, { prefix: 'g', label: 'Show all' }]}
        tableData={{
          columns: TableColumns,
          body: (
            SampleData.map(element => Item(element))
          )
        }}
      />
    </Layout>
  )
}

export default Payments