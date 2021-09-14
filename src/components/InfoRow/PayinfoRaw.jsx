import './InfoRow.scss'

const PayinfoRaw = (props) => {
  return (
    <div className='info-container'>
      <div className='info-title'>
        {props.title === 'paypal' &&(
          <span className="payment-method paypal">PayPal</span>
        )||
        props.title === 'stripe' &&(
          <span className="payment-method">stripe</span>
        )}

      </div>
      <div className='info-content'>{props.content}</div>
      <div className='info-btn'>
        <button className='edit-btn'>{props.btn}</button>
      </div>
    </div>
  )
}

export default PayinfoRaw
