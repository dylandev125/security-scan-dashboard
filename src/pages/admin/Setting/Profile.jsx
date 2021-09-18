import InfoRow from '../../../components/InfoRow/InfoRow'

const Profile = () => {
  return (
    <div className="setting-wrapper">
        <div className="box-info">
          <span className="big-caption">Contact Information</span>
          <span className="small-text">Contact information is private information, that is not visible to other users.</span>
          <InfoRow title="Full Name" content="Allan Nalla" btn="Edit" />
          <InfoRow title="CMO" content="Allan Nalla" btn="Edit" />
          <InfoRow title="Phone" content="+372 555 55 555" btn="Edit" />
          <InfoRow title="Email"
            content={<>allan@lucreds.com<span style={{marginLeft: '10px'}} className="text-muted">Primary</span></>}
            btn="Edit" />
        </div>
    </div>
  )
}

export default Profile