import InfoRow from '../../../../components/InfoRow/InfoRow'
import WebsiteListItem from './WebsiteListItem'
import './AccountInfo.scss'

const AccountInfo = () => {
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
        <InfoRow title="Company" content="Lucreds Inc." btn="Edit" />
        <InfoRow title="Reg. Number" content="EE12345678" btn="Edit" />
        <InfoRow title="Address" content="Meistri 16, Haabersti, Tallinn 13517 EE" btn="Edit" />
        <InfoRow title="Company Size" content="Small Company" btn="Edit" />
      </div>

      <div className='box-info'>
        <div className='info-header'>
          <span className='big-caption'>Contact Information</span>
          <span className='small-text'>
            Contact information is private information, that is not visible to
            other users.
          </span>
        </div>
        <InfoRow title="Full Name" content="Allan Nalla" btn="Edit" />
        <InfoRow title="CMO" content="Allan Nalla" btn="Edit" />
        <InfoRow title="Phone" content="+372 555 55 555" btn="Edit" />
        <InfoRow title="Email"
          content={<>allan@lucreds.com<span style={{marginLeft: '10px'}} className="text-muted">Primary</span></>}
          btn="Edit" />
      </div>

      <div className='box-info'>
        <div className='info-header'>
          <span className='big-caption'>Website Information</span>
          <span className='small-text'>
            Here you can add and edit website lists.
          </span>
        </div>
        <InfoRow
          title={<div className="inforow-title-container"><span>New website</span><span>Limit 2/10</span></div>}
          content={<div className="inforow-title-container"><span>Enter website name</span>
            <span>Enter website address/addresses</span></div>}
          btn="Add"
        />
        <InfoRow
          title="Website list"
          content={
            <div className="website-list-wrapper">
              <WebsiteListItem title="Example" verified siteurl="https://www.example.com" />
              <WebsiteListItem title="Example" siteurl="https://www.example.com" />
              <WebsiteListItem title="Example" verified siteurl="https://www.example.com" />
            </div>
          }
          btn="Edit"
        />
      </div>
    </div>

  )
}

export default AccountInfo
