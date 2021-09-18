import Layout from '../../../../components/layout/Layout'
import BaseTable from "../../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData, AddItem } from "./PageBuilder";
import './CodeGenerator.scss'
import { useHistory } from 'react-router';

const CodeGenerator = () => {
  const handleClick = (index) => {

  }

  const rows = SampleData.map((element, index) => Item(element, () => handleClick(index)));
  const finalRows = [...AddItem(), ...rows];
  
  return (
    <Layout type='setting' userType='admin'>
      <BaseTable
        className="Code-Generator-Table"
        ribon="CODE GENERATOR"
        tableHeader={[{ prefix: 'p' },]}
        hasSearchBox
        tableData={{
          columns: TableColumns,
          body: (
            finalRows
          )
        }}
      />
    </Layout>
  )
}

export default CodeGenerator