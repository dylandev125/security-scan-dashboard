import React, { useState } from "react";
import BaseTable from "../../../components/base-table/BaseTable";
import { TableColumns, Item, SampleData } from "./PageBuilder";
import './Dashboard.scss';

const Dashboard = () => {

  return (
    <>
      <BaseTable
        hasSearchBox
        tableHeader={[{ prefix: 'd' }, { prefix: 'p' }]}
        tableData={{
          columns: TableColumns,
          body: (
            SampleData.map(element => Item(element))
          )
        }}
      />
    </>
  );
};

export default Dashboard;