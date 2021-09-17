import React from "react";
import BaseTable from "../../../components/base-table/BaseTable";
import './Suspense.scss'

const TestPage = () => {
  return (
    <>
      <BaseTable hasSearchBox tableHeader={ [{ prefix: 'd' }, { prefix: 'p' }, { prefix: 'm' }, { prefix: 'g', label: 'okay' }] }
        tableData={{
          columns: [{
            header: "Date/Invoices",
            key: 'date_invoices',
            width: '20%'
          }],
          body: [{
            date_invoices: <><span className="text-muted">August 05/2021</span></>
          }]
        }} />
    </>
  );
};

export default TestPage;