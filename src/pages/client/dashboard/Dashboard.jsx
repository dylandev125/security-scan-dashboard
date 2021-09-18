import Layout from '../../../components/layout/Layout'
import PieChart from '../../../components/PieChart/PieChart'
import ReportSummary from '../../../components/Report/ReportSummary'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <>
      <Layout type={'dashboard'} userType={'customer'}>
        <div className='content-wrapper'>
          <div className="title-box">
            <div className='DB-Box'>
              <div className="topTitle"><span className="topTitle-text">REPORTS SUMMARY</span></div>
              <table>
                <thead>
                  <tr>
                    <th className='title-id'>Report ID</th>
                    <th className='title-des'>Description of problems</th>
                    <th className='title-risk'>Risk level</th>
                    <th className='title-inst'>Number of Instances</th>
                    <th className='title-btn'></th>
                  </tr>
                </thead>
              </table>
              <ReportSummary/>
              <ReportSummary/>
              <ReportSummary/>
          </div>
        </div>
          <div className='Risk-Tab'>
            <div className="topTitle"><span className="topTitle-text">RISK SCORES</span></div>
            <PieChart/>
          </div>

          <div className='Earn-Box'>
            <div className="title">Description</div>
            <div className="riskView"><div className="criticalBox"></div> <span className="riskText">Critical Risk (CVSSv3 9.0 - 10.00)</span></div>
            <div className="riskView"><div className="highBox"></div> <span className="riskText">High Risk (CVSSv3 7.0 - 8.9)</span> </div>
            <div className="riskView"><div className="mediumBox"></div> <span className="riskText">Medium Risk (CVSSv3 4.0 - 6.9)</span></div>
            <div className="riskView"><div className="lowBox"></div> <span className="riskText">Medium Risk (CVSSv3 4.0 - 6.9)</span></div>
            <div className="riskView"><div className="infoBox"></div><span className="riskText">Informative</span></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Dashboard;