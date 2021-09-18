import './InfoRow.scss'
import { Dropdown } from 'react-bootstrap'

const CompanyInfo = (props) => {
  return (
    <div className='info-container'>
      <div className='info-title'>{props.title}</div>
      <div className='info-content'>{props.content}</div>
      <div className='info-choose'>
        {props.dropdown===true && (
        <Dropdown>
          <Dropdown.Toggle id='dropdown-basic' className='choose-tab'>
            Choose
          </Dropdown.Toggle>

          <Dropdown.Menu>

          </Dropdown.Menu>
        </Dropdown>
        )}
      </div>
      <div className='info-btn'>
        <button className='edit-btn' onClick={props.onClick}>{props.btn}</button>
      </div>
    </div>
  )
}

export default CompanyInfo;