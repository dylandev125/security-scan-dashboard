import React, { useState } from "react";
import SecurityScan from "../../../components/security/security-scan"
import ScannedItem from "../../../components/security/scanned-item"
import Layout from '../../../components/layout/Layout'
import "./Security.scss"

const Security = () => {
  return (
    <Layout type='main-layout'>
      <div className="security-wrapper">
        <span className="security-scan">Security scan</span>
        <SecurityScan />
        <hr/>
        <span className="previous-scans">Previous scans</span>
        <ScannedItem logo={{borderColor: '#50d786', color: 'rgba(0, 0, 0, 0.85)'}} />
        <ScannedItem logo={{borderColor: '#f0e473', color: 'rgba(0, 0, 0, 0.85)'}} />
        <ScannedItem logo={{borderColor: '#ed765c', color: 'rgba(0, 0, 0, 0.85)'}} />
        <ScannedItem logo={{borderColor: '#50d786', color: 'rgba(0, 0, 0, 0.85)'}} />
      </div>
    </Layout>
  )
}

export default Security

