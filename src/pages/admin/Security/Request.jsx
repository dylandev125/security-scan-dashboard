import Layout from '../../../components/layout/Layout'
import DatePicker from '../../../components/datepicker'
import Button from '../../../components/button'
import DropdownMenu from '../../../components/dropdown/DropdownMenu'
import ReportSummary from '../../../components/RequestSummary/RequestSummary'
import './Security.scss'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom'
import { ReactComponent as Back } from '../../../assets/back.svg'


const Request = () => {
  return (
    <Layout type='security' userType='admin'>
      <div className="security-wrapper">
        <div className="box-info">
          <div className="caption-header">
            <div className="caption">
              <span className="medium-caption">Request Number</span>
              <span className="medium-text">#000029</span>
            </div>
            <DatePicker/>
            <Button label='Premium'/>
            <div className="caption">
              <span className="medium-caption">Company</span>
              <span className="medium-text">Example Inc</span>
            </div>
            <div className="caption">
              <span className="medium-caption">Website</span>
              <span className="medium-text">https://www.example.com</span>
            </div>
            <DropdownMenu title='Processing'/>
            <Button label='Upload'/>
          </div>

          <div className="content-title">
            <div className="content-title-1"><span className="medium-caption">Summary</span></div>
            <div className="content-title-2"><span className="medium-caption">For Graph</span></div>
          </div>

          <div className="content-wrapper">
            <div className="content-wrapper-1">
              <ReportSummary/>
              <ReportSummary/>
              <ReportSummary/>
              <ReportSummary/>
              <ReportSummary/>
            </div>

            <div className="content-wrapper-2">
              <div className="sub-title"><span className="medium-text">Issues</span></div>

              <div className="risk-row">
                <div className="set-issue">
                  <input type="text" className="issue-input" />
                </div>
                <div className="show-description">
                  <div className="riskView"><div className="riskBox critical"></div> <span className="riskText">Critical Risk (CVSSv3 9.0 - 10.00)</span></div>
                </div>
              </div>

              <div className="risk-row">
                <div className="set-issue">
                  <input type="text" className="issue-input" />
                </div>
                <div className="show-description">
                <div className="riskView"><div className="riskBox high"></div> <span className="riskText">High Risk (CVSSv3 7.0 - 8.9)</span> </div>
                </div>
              </div>

              <div className="risk-row">
                <div className="set-issue">
                  <input type="text" className="issue-input" />
                </div>
                <div className="show-description">
                <div className="riskView"><div className="riskBox medium"></div> <span className="riskText">Medium Risk (CVSSv3 4.0 - 6.9)</span></div>
                </div>
              </div>

              <div className="risk-row">
                <div className="set-issue">
                  <input type="text" className="issue-input" />
                </div>
                <div className="show-description">
                <div className="riskView"><div className="riskBox low"></div> <span className="riskText">Low Risk (CVSSv3 0.1 - 3.9)</span></div>
                </div>
              </div>

              <div className="risk-row">
                <div className="set-issue">
                  <input type="text" className="issue-input" />
                </div>
                <div className="show-description">
                <div className="riskView"><div className="riskBox info"></div><span className="riskText">Informative</span></div>
                </div>
              </div>

            </div>
          </div>

          <div className="btn-back"><Link to='/admin/setting'><Back/></Link></div>
          <div className="ribon">REQUEST #000029</div>
        </div>
      </div>
  </Layout>
  )
}

export default Request