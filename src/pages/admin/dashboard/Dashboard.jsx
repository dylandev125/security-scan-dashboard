import Layout from '../../../components/layout/Layout'
import BaseTable from "../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData } from "./PageBuilder";
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <Layout type='dashboard' userType='admin'>
      <BaseTable
        hasSearchBox
        ribon="USERS"
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