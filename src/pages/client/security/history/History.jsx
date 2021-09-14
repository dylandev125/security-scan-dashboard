
import React, { useState } from "react";
import SortableTable from 'react-sortable-table';
import MSortTable from '../../../../components/SortTable'
import Button from '../../../../components/button'
import './History.scss'

const History = () => {
  const [state, setState] = useState({
    data: [
      { scan_id: '#001122', grade:'B', website_name:'Example name', website:'www.example.com', date_scanned: '29. August 2021', button: <Button label='Open report'/>},
      { scan_id: '#003209', grade:'C', website_name:'Example name', website:'www.example.com', date_scanned: '29. August 2021', button: <Button label='Open report'/>},
      { scan_id: '#009102', grade:'A', website_name:'Example name', website:'www.example.com', date_scanned: '29. August 2021', button: <Button label='Open report'/>},
      { scan_id: '#008651', grade:'B', website_name:'Example name', website:'www.example.com', date_scanned: '29. August 2021', button: <Button label='Open report'/>},
      { scan_id: '#003461', grade:'B', website_name:'Example name', website:'www.example.com', date_scanned: '29. August 2021', button: <Button label='Open report'/>},
    ]
  });

  const columns = [
    {
      header: 'Scan ID',
      key: 'scan_id',
      width: '10%'
    },
    {
      header: 'Grade',
      key: 'grade',
      width: '10%'
    },
    {
      header: 'Website name',
      key: 'website_name',
      width: '15%'
    },
    {
      header: 'website',
      key: 'website',
      width: '20%'
    },
    {
      header: 'Date scanned',
      key: 'date_scanned',
      width: '20%',
    },
    {
      header: ' ',
      key: 'button'
    }
  ];

  return (
    <>
      <div className="history-wrapper">
        <div className="ribon">SCANS DONE</div>
        <MSortTable columns={columns} rows={state.data} defaultSorting={columns[0].key}/>
      </div>
    </>
  );
};

export default History;