import Layout from '../../../components/layout/Layout'
import BaseTable from "../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData } from "./PageBuilder";
import './Security.scss'
import { useHistory } from 'react-router';

const Security = () => {
  const history = useHistory();
  const handleClick = (index) => {
    history.push(`/admin/security/${index}`);
  }

  return (
    <Layout type='Security' userType='admin'>
      <BaseTable
        ribon="SCANS"
        tableHeader={[{ prefix: 'd' }, { prefix: 'p' }, { prefix: 'g', label: 'Standard' }, { prefix: 'g', label: 'Premium' }]}
        hasSearchBox
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

export default Security