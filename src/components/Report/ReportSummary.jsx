const ReportSummary = (props) => {
  return (
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

  )
}

export default ReportSummary;