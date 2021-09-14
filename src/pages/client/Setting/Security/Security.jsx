import InfoRow from '../../../../components/InfoRow/InfoRow'

const Security = () => {
  return (
    <div className='setting-wrapper'>
      <div className='box-info'>
        <div className='info-header'>
          <span className='big-caption'>Company Information</span>
          <span className='small-text'>
            Some of the information may be visible to other users of Fixpark
            services, except your last name.
          </span>
          <span className='small-text'>
            If you're a freelancer then choose at
            <span className='medium-text'> Company Size </span>a{' '}
            <span className='medium-text'>Freelancer </span>choice
          </span>
        </div>
        <InfoRow title='Password' content='Last Updated 20.08' btn='Edit'/>
        <InfoRow title='Two-factor authentication' content='ON' btn='Edit'/>
      </div>
    </div>
  )
}

export default Security
