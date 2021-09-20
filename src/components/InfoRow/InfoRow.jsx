import './InfoRow.scss'
import { Dropdown } from 'react-bootstrap'

const CompanyInfo = (props) => {

  return (
    <div className={'info-container ' + (props.className || '') }>
      <div className='info-title'>{props.title}</div>
      <div className='info-content'>{props.content}</div>
      <div className='info-choose'>
        {props.dropdown && (
        <Dropdown>
          <Dropdown.Toggle id='dropdown-basic' className='choose-tab'>
            {
            props.dropdown.btnlabel
            }
          </Dropdown.Toggle>

          <Dropdown.Menu>

          </Dropdown.Menu>
        </Dropdown>
        )}
      </div>
      <div className='info-btn'>
        {
          props.btn && <button className='edit-btn' onClick={props.onClick}>{props.btn}</button>
        }
      </div>
    </div>
  )
}

export default CompanyInfo;