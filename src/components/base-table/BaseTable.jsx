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
import { Form } from "react-bootstrap";

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
        return <Button label={btnInfo.label} key={index} handleClick={btnInfo.handleClick}></Button>;
      case 'f':
        return <Button label="filter" key={index}></Button>;
      default:
    }
  }
  return (
    <>
      <div className={"base-table-wrapper "+ (props.className || '')}>
        <Panel>
          <div className="base-table-header">
            <div className="button-group" style={{ minWidth: props.tableHeader.length * 142 + 20 * (props.tableHeader.length - 1) + 'px' }}>
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
            {
              props.filters &&
              <div className="filter-wrapper">
                <span className="filter-title">Filter</span>
                <div className="filter-body">
                  {
                    props.filters.map((filter, index) => (
                      <Form.Check className="filter-checkbox" type='checkbox' label={filter} key={index} />
                    ))
                  }
                </div>
              </div>
            }
          </div>

          <MSortTable
            columns={props.tableData.columns}
            rows={props.tableData.body}
          />
        </Panel>
        <div className="ribon">{props.ribon}</div>
      </div>
    </>
  );
};

export default BaseTable;