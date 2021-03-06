import Layout from '../../../../components/layout/Layout'
import BaseTable from "../../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData } from "./PageBuilder";
import './Account.scss'
import { useHistory } from 'react-router';

const Security = () => {
  const history = useHistory();
  const handleClick = (index) => {
    history.push(`/admin/setting/${index}`);
  }
  const goCodeGenerator = () => {
    history.push(`/admin/setting/code-generator`);
  }
  const goAddUser = () => {
    history.push(`/admin/setting/adduser`);
  }

  return (
      <BaseTable
        ribon="USERS"
        tableHeader={[{ prefix: 'p' }, { prefix: 'g', label: 'Add Admin' }, { prefix: 'g', label: 'Add User', handleClick: goAddUser }, { prefix: 'g', label: 'Create Code', handleClick: goCodeGenerator }]}
        hasSearchBox
        tableData={{
          columns: TableColumns,
          body: (
            SampleData.map((element, index) => Item(element, ()=>handleClick(index)))
          )
        }}
      />
  )
}

export default Security