import { Dropdown } from 'react-bootstrap'
import './Dropdown.scss'
const DropdownMenu = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id='dropdown-basic' className='choose-tab'>
        {
          props.type === 'risk' && (
          <div className="riskBox placeholder"></div>
        )}
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>

      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownMenu