import Layout from '../../../components/layout/Layout'
import BaseTable from "../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData } from "./PageBuilder";
import { useHistory } from 'react-router';
import './Support.scss'

const Support = () => {
  const history = useHistory();
  const handleClick = (index) => {
    history.push(`/admin/support/${index}`);
  }

  return (
    <Layout type='support' userType='admin'>
      <BaseTable
        className="support-table"
        ribon="QUESTIONS"
        filters={['Under review', 'Replyed', 'Customer reply', 'Closed']}
        tableHeader={[{ prefix: 'd' }, { prefix: 'p' }]}
        tableData={{
          columns: TableColumns,
          body: (
            SampleData.map((element, index) => Item(element, ()=>handleClick(index)))
          )
        }}
      />
    </Layout>
  )
}

export default Support