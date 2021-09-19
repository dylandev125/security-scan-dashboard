import Layout from '../../../../components/layout/Layout'
import BaseTable from "../../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData, AddItem } from "./PageBuilder";
import { useState } from 'react'
import { useHistory } from 'react-router'
import './CodeGenerator.scss'

import Accounts from '../main/Account'
import Profile from '../Profile'
import Security from '../Security'

const CodeGenerator = () => {
  const history = useHistory();
  const [nav, setNavState] = useState('')
  const handleClick = (index) => {

  }
  const NavClick = (nav) => {
    setNavState(nav)
  }
  const goBack = () => {
    history.push(`/admin/setting`);
  }

  const rows = SampleData.map((element, index) => Item(element, () => handleClick(index)));
  const finalRows = [...AddItem(), ...rows];

  return (
    <Layout type='setting' userType='admin' handleClick={NavClick}>
      {
        nav === 'acc' && (
          <Accounts />
        ) ||
        nav === 'pro' && (
          <Profile />
        ) ||
        nav === 'sec' && (
          <Security/>
      )}
      <BaseTable
        className="Code-Generator-Table"
        ribon="CODE GENERATOR"
        tableHeader={[{ prefix: 'p' },]}
        hasSearchBox
        backButton={{handleClick: goBack}}
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