import InfoRow from '../../../../components/InfoRow/InfoRow'

const Payments = () => {
  return (
    <div className='setting-wrapper'>
      <div className='box-info'>
        <div className='info-header'>
          <span className='big-caption'>Company Information</span>
          <span className='small-text'>
            Some of the information may be visible to other users of Fixpark
            services, except your last name.
          </span>
        </div>
        <InfoRow title='Invoice' content='Not Requested' btn='Request' />
      </div>
    </div>
  )
}

export default Payments
