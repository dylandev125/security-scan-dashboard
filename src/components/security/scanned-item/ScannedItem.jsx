import React, { useState } from "react";
import Button from '../../button'
import Panel from '../../panel'
import './ScannedItem.scss'

const ScannedItem = (props) => {
  return (
    <>
      <Panel className="scan-panel">
        <div className="site-title">
          <div className="sitelogo" 
               style={{borderColor: props.logo ? props.logo.borderColor: '#50d786'}}>
            <span style={{color: props.logo ? props.logo.color : 'rgba(0, 0, 0, 0.85)'}}>B</span>
          </div>
          <div className="sitename">
            <span><strong>Example name</strong></span>
            <span className="text-muted">https://example.com</span>
          </div>
        </div>
        <div className="scan-info">
          <div className="scan-date">
            <span className="text-muted">Date Scanned</span>
            <span><strong>10/08/21</strong></span>
          </div>
          <Button label="Open report" />
        </div>
      </Panel>
    </>
  );
};

export default ScannedItem;