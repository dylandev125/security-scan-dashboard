import './InfoRow.scss'

const CompanyInfo = (props) => {
  return (
    <div className='info-container'>
      <div className='info-title'>{props.title}</div>
      <div className='info-content'>{props.content}</div>
      <div className='info-btn'>
        <button className='edit-btn'>{props.btn}</button>
      </div>
    </div>
  )
}

export default CompanyInfo;