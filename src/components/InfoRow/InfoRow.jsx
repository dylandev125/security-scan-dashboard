import './InfoRow.scss'

const CompanyInfo = () => {
  return (
    <div className="info-container">
        <div className="info-title">Company</div>
        <div className="info-content">Lucred Inc.</div>
        <div className="info-btn">
          <button className="edit-btn">Edit</button>
        </div>
    </div>
  )
}

export default CompanyInfo