import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

const Middlewares = (props) => {
  const [needLoginPage, setNeedLoginPage] = useState(false);

  useEffect(() => {
    if(window.localStorage.getItem("authToken")) {
      setNeedLoginPage(true);
    } else {
      setNeedLoginPage(false);
    }
  }, []);

  return (
    <>
    {needLoginPage && <Redirect to="/login" />}
    {!needLoginPage && <>{props.children}</>}
    </>
  );
};

export default Middlewares;