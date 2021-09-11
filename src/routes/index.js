import React, {lazy} from "react";
import {Route, Switch} from "react-router-dom";
import retry from "../utils/retry";

const HomePage = lazy(() => retry(() => import("../pages/client/home")))
const LoginPage = lazy(() => retry(() => import("../pages/login")))
const SignupPage = lazy(() => retry(() => import("../pages/register")))

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path={["/", "/login"]} exact={true} component={LoginPage} />
    </Switch>
  )
}

export default AppRoutes;