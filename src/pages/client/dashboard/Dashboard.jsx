import Layout from '../../../components/layout/Layout'
import PieChart from '../../../components/PieChart/PieChart'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <>
      <Layout type={'dashboard'}>
        <div className='content-wrapper'>
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
            <table>
              <thead>
                <tr>
                  <th className='title-id'></th>
                  <th className='title-des'></th>
                  <th className='title-risk'></th>
                  <th className='title-inst'></th>
                  <th className='title-btn'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan='4' className='report-id'>
                    #001239
                    <span className='report-date'>23:05 | 19.August 2021</span>
                  </td>
                  <td>Server Leaks Information via “X-Powered-By” HTTP Response Header Field(s)</td>
                  <td>
                    <div className="riskView-2"><div className="criticalBox"></div> <span className="riskText">Critical</span></div>
                  </td>
                  <td>2</td>
                  <td rowSpan='4'>
                    <div className='btn-wrapper'>
                      <button className='box-btn'>Open report</button>
                      <button className='box-btn'>Download</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Server Leaks Information</td>
                  <td>
                    <div className="riskView-2"><div className="highBox"></div> <span className="riskText">High</span></div>
                  </td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Server Leaks Information</td>
                  <td>
                    <div className="riskView-2"><div className="mediumBox"></div> <span className="riskText">Medium</span></div>
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Server Leaks Information via “X-Powered-By” HTTP Response Header Field(s)</td>
                  <td>
                    <div className="riskView-2"><div className="lowBox"></div> <span className="riskText">Low</span></div>
                  </td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th className='title-id'></th>
                  <th className='title-des'></th>
                  <th className='title-risk'></th>
                  <th className='title-inst'></th>
                  <th className='title-btn'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan='4' className='report-id'>
                    #001239
                    <span className='report-date'>23:05 | 19.August 2021</span>
                  </td>
                  <td>Server Leaks Information via “X-Powered-By” HTTP Response Header Field(s)</td>
                  <td>
                    <div className="riskView-2"><div className="criticalBox"></div> <span className="riskText">Critical</span></div>
                  </td>
                  <td>2</td>
                  <td rowSpan='4'>
                    <div className='btn-wrapper'>
                      <button className='box-btn'>Open report</button>
                      <button className='box-btn'>Download</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Server Leaks Information via “X-Powered-By” HTTP Response Header Field(s)</td>
                  <td>
                    <div className="riskView-2"><div className="highBox"></div> <span className="riskText">High</span></div>
                  </td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Server Leaks Information via “X-Powered-By” HTTP Response Header Field(s)</td>
                  <td>
                    <div className="riskView-2"><div className="mediumBox"></div> <span className="riskText">Medium</span></div>
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Server Leaks Information via “X-Powered-By” HTTP Response Header Field(s)</td>
                  <td>
                    <div className="riskView-2"><div className="lowBox"></div> <span className="riskText">Low</span></div>
                  </td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
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