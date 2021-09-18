import React, {lazy} from "react";
import { Route, Switch } from 'react-router-dom'
import retry from "../utils/retry";

const LoginPage = lazy(() => retry(() => import("../pages/login")))
const SignupPage = lazy(() => retry(() => import("../pages/register")))
const CustomerDashboardPage = lazy(() => retry(() => import("../pages/client/dashboard/Dashboard")));
const SecurityScanPage = lazy(() => retry(() => import("../pages/client/security")));
const CustomerBillingPage = lazy(() => retry(() => import("../pages/client/Billing/Billing")))
const CustomerSettingPage = lazy(() => retry(() => import("../pages/client/Setting/Setting")))
const AdminDashboardTest = lazy(() => retry(() => import("../pages/admin/Dashboard")))

const AdminDashboard = lazy(() => retry(() => import("../pages/admin/Dashboard/Dashboard")));
const AdminSupport = lazy(() => retry(() => import("../pages/admin/Support")));
const AdminSecurity = lazy(() => retry(() => import("../pages/admin/Security/Security")));
const AdminBilling = lazy(() => retry(() => import("../pages/admin/Payments")));
const AdminSetting = lazy(() => retry(() => import("../pages/admin/Setting/main")));
const AdminSettingCodeGenerator = lazy(() => retry(() => import("../pages/admin/Setting/code_generator")));
const AdminSupportTicket = lazy(() => retry(() => import("../pages/admin/Support/TicketView/QuestionTicket")));

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path={["/", "/login"]} exact={true} component={LoginPage} />
      <Route path="/admin/test" component={AdminDashboardTest} />
      <Route path="/customer/dashboard" component={CustomerDashboardPage} />
      <Route path="/customer/security" exact={true} component={SecurityScanPage} />
      <Route path="/customer/billing" component={CustomerBillingPage} />
      <Route path="/customer/setting" component={CustomerSettingPage} />

      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/support" exact={true} component={AdminSupport} />
      <Route path="/admin/support/:id" component={AdminSupportTicket} />
      <Route path="/admin/security" component={AdminSecurity} />
      <Route path="/admin/billing" component={AdminBilling} />
      <Route path="/admin/setting" exact={true} component={AdminSetting} />
      <Route path="/admin/setting/code-generator" exact={true} component={AdminSettingCodeGenerator} />
    </Switch>
  )
}

export default AppRoutes;