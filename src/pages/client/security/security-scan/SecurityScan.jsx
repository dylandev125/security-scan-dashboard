import React, { useState } from "react";
import SecureScan from "../../../../components/security/security-scan"
import ScannedItem from "../../../../components/security/scanned-item"
import "./SecurityScan.scss"

const SecurityScan = () => {
  return (
    <div className="security-wrapper">
      <span className="security-scan">Security scan</span>
      <SecureScan />
      <hr />
      <span className="previous-scans">Previous scans</span>
      <ScannedItem logo={{ letter: 'B', borderColor: '#50d786', color: 'rgba(0, 0, 0, 0.85)' }} />
      <ScannedItem logo={{ letter: 'C', borderColor: '#f0e473', color: 'rgba(0, 0, 0, 0.85)' }} />
      <ScannedItem logo={{ letter: 'F', borderColor: '#ed765c', color: 'rgba(0, 0, 0, 0.85)' }} />
      <ScannedItem logo={{ letter: 'B', borderColor: '#50d786', color: 'rgba(0, 0, 0, 0.85)' }} />
    </div>
  )
}

export default SecurityScan

