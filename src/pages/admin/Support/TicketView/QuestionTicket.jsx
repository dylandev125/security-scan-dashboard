import Layout from '../../../../components/layout/Layout'
import Button from '../../../../components/button'
import SmallButton from '../../../../components/button/SmallButton'
import { ReactComponent as BackIcon } from '../../../../assets/back.svg'
import { useHistory } from 'react-router'

import './QuestionTicket.scss'

const QuestionTicket = () => {
  const history = useHistory()
  const goBack = () => {
    history.push('/admin/support')
  }

  return (
    <Layout type='security' userType='admin'>
      <div className="question-wrapper">
        <div className="box-info">
          <div className="ticket-header">
            <div>
              <span className="Ticket-No">Ticket: #001339</span>
              <span className="Opened">Opened</span>
              <span className="Open-date-value">August 30, 2021</span>
            </div>
            <SmallButton handleClick={goBack}><BackIcon /></SmallButton>
          </div>
          <div className="ticket-info">
            <div className="Invoice-title">
              <span className="DateInvoices">Sended by</span>
              <span className="Invoice">Subject</span>
            </div>
            <div className="Invoice-value">
              <span className="Sended-by-value">Example Inc.</span>
              <span className="Subject-value">Problem with payment subscription</span>
            </div>
          </div>
          <div className="message-wrapper">
            <span className="Message">Message</span>
            <div className="Message-Rectangle left">
              <span className="Message-Income">
                Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
            <span className="Sent-date income">15:39 | Aug.30</span>
            <div className="Message-Rectangle right">
              <span className="Message-Reply">
                Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
            <span className="Sent-date reply">15:39 | Aug.30</span>
          </div>
          <div className="message-sender">
            <input className="message-send-box" />
            <Button label="Send" />
          </div>
          <div className="ribon">QUESTIONS</div>
        </div>
      </div>
    </Layout>
  )
}

export default QuestionTicket