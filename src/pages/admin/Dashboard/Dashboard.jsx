import Layout from '../../../components/layout/Layout'
import BaseTable from "../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData } from "./PageBuilder";
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <Layout type='dashboard' userType='admin'>
      <BaseTable
        className="admin-dashboard-wrapper"
        hasSearchBox
        ribon="INVOICE"
        tableHeader={[{ prefix: 'd' }, { prefix: 'p' }]}
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

export default Dashboard