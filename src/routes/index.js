import React, {lazy} from "react";
import { Route, Switch } from 'react-router-dom'
import retry from "../utils/retry";

const HomePage = lazy(() => retry(() => import("../pages/client/home")))
const LoginPage = lazy(() => retry(() => import("../pages/login")))
const SignupPage = lazy(() => retry(() => import("../pages/register")))
const CustomerDashboardPage = lazy(() => retry(() => import("../pages/client/dashboard/Dashboard")));
const SecurityScanPage = lazy(() => retry(() => import("../pages/client/security")));
const CustomerBillingPage = lazy(() => retry(() => import("../pages/client/Billing/Billing")))
const CustomerSettingPage = lazy(() => retry(() => import("../pages/client/Setting/Setting")))

const AdminDashboard = lazy(() => retry(() => import("../pages/admin/Dashboard/Dashboard")));
const AdminSupport = lazy(() => retry(() => import("../pages/admin/Support/Support")));
const AdminSecurity = lazy(() => retry(() => import("../pages/admin/Security/Security")));
const AdminBilling = lazy(() => retry(() => import("../pages/admin/Billing/Billing")));
const AdminSetting = lazy(() => retry(() => import("../pages/admin/Setting/Setting")));

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path={["/", "/login"]} exact={true} component={LoginPage} />
      <Route path="/customer/dashboard" component={CustomerDashboardPage} />
      <Route path="/customer/security" exact={true} component={SecurityScanPage} />
      <Route path="/customer/billing" component={CustomerBillingPage} />
      <Route path="/customer/setting" component={CustomerSettingPage} />

      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/support" component={AdminSupport} />
      <Route path="/admin/security" component={AdminSecurity} />
      <Route path="/admin/billing" component={AdminBilling} />
      <Route path="/admin/setting" component={AdminSetting} />
    </Switch>
  )
}

export default AppRoutes;