import './RequestSummary.scss'
import DropdownMenu from  '../dropdown/DropdownMenu'

const RequestSummary = () => {
  return (
    <div className="summary-row">
      <div className="reportID">
        <span className="medium-text">Report ID</span>
        <input type="text" className="summaryInput" placeholder="#000000"/>
      </div>
      <div className="description">
        <span className="medium-text">Description</span>
        <input type="text" className="summaryInput" placeholder="Write description"/>
      </div>
      <div className="choose">
        <span className="medium-text">Risk Level</span>
        <DropdownMenu type="risk" title="choose"/>
      </div>
      <div className="instances">
        <span className="medium-text">Instances</span>
        <input type="text" className="summaryInput" />
      </div>
    </div>
  )
}

export default RequestSummary