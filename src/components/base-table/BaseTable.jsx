import React from "react";
import MSortTable from '../SortTable'
import Panel from '../panel'
import Button from '../button'
import PaginationButton from '../button/PaginationButton'
import PaymentMethodButton from '../button/PaymentMethodButton'
import CustomDatePicker from '../datepicker'
import SearchBox from '../search-box'
import 'react-calendar/dist/Calendar.css';
import './BaseTable.scss'

/*
* date-d, pagination-p, payment_method-m, general-g, filters-f,  
*/
const BaseTable = (props) => {
  const generateBtn = (btnInfo, index) => {
    switch (btnInfo.prefix) {
      case 'd':
        return (<div className="datepicker-wrapper" key={index}>
          <CustomDatePicker label="All dates" />
        </div>);
      case 'p':
        return <PaginationButton key={index}></PaginationButton>;
      case 'm':
        return <PaymentMethodButton key={index}></PaymentMethodButton>;
      case 'g':
        return <Button label={btnInfo.label} key={index}></Button>;
      case 'f':
        return <Button label="filter" key={index}></Button>;
      default:
    }
  }
  return (
    <>
      <div className='base-table-wrapper'>
        <Panel>
          <div className="base-table-header">
            <div className="button-group" style={{ width: props.tableHeader.length * 13 + '%' }}>
              {
                props.tableHeader.map(
                  (item, index) => {
                    return generateBtn(item, index);
                  }
                )
              }
            </div>
            {
              props.hasSearchBox &&
              <div className="base-table-search-box">
                <SearchBox />
              </div>
            }

          </div>
          <MSortTable
            columns={props.tableData.columns}
            rows={props.tableData.body}
            defaultSorting={props.tableData.columns[0].key}
          />
        </Panel>
        <div className="ribon"></div>
      </div>
    </>
  );
};

export default BaseTable;