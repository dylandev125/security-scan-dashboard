import Layout from '../../../components/layout/Layout'
import InfoRow from '../../../components/InfoRow/InfoRow'
import './Setting.scss'

const Setting = () => {
  return (
    <Layout type={'setting'}>
      <div className="setting-wrapper">
        <div className="company-info">
          <div className="info-header">
            <span className="big-caption">Company Information</span>
            <span className="small-text">Some of the information may be visible to other users of Fixpark services, except your last name.</span>
            <span className="small-text">If you're a freelancer then choose at<span className='medium-text'> Company Size </span>a <span className='medium-text'>Freelancer </span>choice</span>
          </div>
          <InfoRow/>
          <InfoRow/>
          <InfoRow/>
          <InfoRow/>
        </div>

        <div className="contact-info">
          <div className="info-header">
            <span className="big-caption">Contact Information</span>
            <span className="small-text">Contact information is private information, that is not visible to other users.</span>
          </div>
          <InfoRow/>
          <InfoRow/>
          <InfoRow/>
          <InfoRow/>
        </div>
      </div>
    </Layout>
  )
}

export default Setting