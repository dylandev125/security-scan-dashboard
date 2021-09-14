import React, {useState} from "react";
import './Suspense.scss'

const SuspenseFallback = () => {
  return(
    <div className="spinner-container">
      <img src="/loading-spinner.gif" />
    </div>
  );
};

export default SuspenseFallback;