import React, {useState} from "react";
import './Panel.scss';

const Panel = (props) => {
  return(
    <>
      <div className="panel-primary">
        {props.children}
      </div>
    </>
  );
};

export default Panel;
