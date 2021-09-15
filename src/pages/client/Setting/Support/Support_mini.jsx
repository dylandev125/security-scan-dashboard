import { Dropdown, DropdownButton } from 'react-bootstrap'
import './Support_mini.scss'
import Button from "../../../../components/form/button";

const SupportMini = () => {
  return (
    <div className='box-info-support'>
      <div className="info-header">
        <span className='big-caption'>Support</span>
        <span className='normal-text'>Connect with us if you have trouble or need help with something, we will pleasurably help you out.</span>
        <br/>
        <span className='normal-text'>Before you write us, check out the right side tab where you can found the most asked questions. Maybe it's will be useful.</span>
      </div>

      <div className="info-header">
        <span className="medium-text">Subject</span>
        <Dropdown>
          <Dropdown.Toggle id='dropdown-basic' className='search-subject'>
            Choose Subject
          </Dropdown.Toggle>

          <Dropdown.Menu>

          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="info-header">
        <span className="medium-text">Message</span>
        <textarea type="text" className="message" placeholder="Tell us more about problem..."/>
        <Button className="custom-btn custom-btn-primary" title="Send"/>
      </div>

    </div>
  )
}

export default SupportMini