import Layout from '../../../components/layout/Layout'
import './SecurityTicket.scss'

const SecurityTicket = () => {
  return (
    <Layout type='security' userType='admin'>
      <div className="security-wrapper">
        <div className="box-info">
          
          <div className="ribon">QUESTIONS</div>
        </div>
      </div>
    </Layout>
  )
}

export default SecurityTicket