import React, {lazy} from "react";
import { Route, Switch } from 'react-router-dom'
import retry from "../utils/retry";

const LoginPage = lazy(() => retry(() => import("../pages/login")))
const SignupPage = lazy(() => retry(() => import("../pages/register")))
const CustomerDashboardPage = lazy(() => retry(() => import("../pages/client/dashboard/Dashboard")));
const SecurityScanPage = lazy(() => retry(() => import("../pages/client/security")));
const CustomerBillingPage = lazy(() => retry(() => import("../pages/client/Billing/Billing")))
const CustomerSettingPage = lazy(() => retry(() => import("../pages/client/Setting/Setting")))
const TestPage = lazy(() => retry(() => import("../pages/client/test")))
const AdminDashboard = lazy(() => retry(() => import("../pages/admin/dashboard")))
const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path={["/", "/login"]} exact={true} component={LoginPage} />
      <Route path="/scan" exact={true} component={SecurityScanPage} />
      <Route path="/dashboard" component={CustomerDashboardPage} />
      <Route path="/billing" component={CustomerBillingPage} />
      <Route path="/setting" component={CustomerSettingPage} />
      <Route path="/test" component={TestPage} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
    </Switch>
  )
}

export default AppRoutes;