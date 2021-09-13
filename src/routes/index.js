import React, {lazy} from "react";
import { Route, Switch } from 'react-router-dom'
import retry from "../utils/retry";

const HomePage = lazy(() => retry(() => import("../pages/client/home")))
const LoginPage = lazy(() => retry(() => import("../pages/login")))
const SignupPage = lazy(() => retry(() => import("../pages/register")))
const CustomerDashboardPage = lazy(() => retry(() => import("../pages/client/dashboard/Dashboard")))
const CustomerBillingPage = lazy(() => retry(() => import("../pages/client/Billing/Billing")))

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path={["/", "/login"]} exact={true} component={LoginPage} />
      <Route path="/dashboard" component={CustomerDashboardPage} />
      <Route path="/billing" component={CustomerBillingPage} />
    </Switch>
  )
}

export default AppRoutes;