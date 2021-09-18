import InfoRow from '../../../components/InfoRow/InfoRow'

const Security = () => {
  return (
    <div className='setting-wrapper'>
      <div className='box-info'>
        <div className='info-header'>
          <span className='big-caption'>Password & Security</span>
          <span className='small-text'>
          Make sure your password is strength enough and we recommend update your password every quarter.
          </span>
        </div>
        <InfoRow title='Password' content='Last Updated 20.08' btn='Edit'/>
        <InfoRow title='Two-factor authentication' content='ON' btn='Edit'/>
      </div>
    </div>
  )
}

export default Security
