import React, {useState} from "react";
import './CustomInput.scss'

const SuspenseFallback = (props) => {
  return(
    <>
      <input type="text" value={props.text || ''} className="Custom-Text-Input" />
    </>
  );
};

export default SuspenseFallback;