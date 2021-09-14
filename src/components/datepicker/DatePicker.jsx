import React, { useState } from "react"
import './DatePicker.scss'
import Calendar from 'react-calendar';
import { ReactComponent as DateIcon } from '../../assets/date.svg'
import { ReactComponent as DropdownIcon } from '../../assets/dropdown-i.svg'

const Button = (props) => {
  const [visible, setVisible] = useState(false);
  const [currentDate, onDateChange] = useState(new Date());
  const handleBlur = (e) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setVisible(false);
      }
    }, 0);
  };

  return (
    <div className="custom-datepicker-wrapper">

      <button className="custom-datepicker-btn" onClick={() => { setVisible(!visible) }}>
        <DateIcon />
        <span>{currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + (currentDate.getDate())}</span>
        <DropdownIcon />
      </button>
      {
        visible && <div className="calendar-container" tabIndex={1} onBlur={handleBlur}><Calendar
            className="custom-calendar"
            onChange={onDateChange}
            value={currentDate}
          /></div>
      }
    </div>
  )
}

export default Button