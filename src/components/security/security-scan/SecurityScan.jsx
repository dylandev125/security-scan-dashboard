import React, { useState } from "react";
import Button from '../../button'
import Panel from '../../panel'
import './SecurityScan.scss'

const SecurityScan = () => {
  return (
    <>
      <Panel>
        <div className="sitescan-select">
          <span><strong>Choose website</strong></span>
          <span>https://example.com</span>
        </div>
        <Button label="Scan" />
      </Panel>
    </>
  );
};

export default SecurityScan;