import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./global/Login";
import Error from "./global/Error";
import Register from "./admin/Register";
import Layout from "./admin/components/Layout";
import { Outlet } from "react-router-dom";

import Dashboard from "./admin/pages/Dashboard";
import EmployeeList from "./admin/pages/employees/EmployeeList";
import EmployeeForm from "./admin/pages/employees/EmployeeForm";
import AttendanceList from "./admin/pages/attendance/AttendanceList";
import AttendanceForm from "./admin/pages/attendance/AttendanceForm";
import LeaveList from "./admin/pages/leaves/LeaveList";
import LeaveForm from "./admin/pages/leaves/LeaveForm";
import PerformanceList from "./admin/pages/performance/PerformanceList";
import PerformanceForm from "./admin/pages/performance/PerformanceForm";
import TrainingList from "./admin/pages/training/TrainingList";
import TrainingForm from "./admin/pages/training/TrainingForm";

import EmployeeDashboard from "./employee/EmployeeDashboard";
import Hrdashboard from "./hrmanagers/hrdashborad";
import RecruiterDashboard from "./recruiters/RecruiterDashboard";

// ✅ Finance Layout with Sidebar/Header and routing
import FinanceLayout from "./finance/components/FinanceLayout";
import Setting from "./finance/Setting";
import FinanceDashboard from "./finance/FinanceDashborad";
import PayrollList from "./finance/PayrollList";

//employee

import EmployeeHome from "./employee/EmployeeHome";
import EmployeeProfile from "./employee/EmployeeProfile";
import LeaveRequestForm from "./employee/LeaveRequestForm";
import AttendanceLogs from "./employee/AttendanceLogs";
import TrainingCertificates from "./employee/TrainingCertificates";
import HRQueries from "./employee/HRQueries";
import PerformancePage from "./employee/PerformancePage";
import PayslipPage from "./employee/PayslipPage";
import LeaveStats from "./employee/LeaveStats";
import WFOCalendar from "./employee/WFOCalendar";

const Master = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/employee" element={<EmployeeDashboard />} />
                <Route path="/hrdashboard" element={<Hrdashboard />} />
                <Route path="/recruiter" element={<RecruiterDashboard />} />
                <Route path="/error" element={<Error />} />
                {/*employee section*/}
                <Route path="/employee" element={<EmployeeDashboard />}>
                    <Route path="dashboard" element={<EmployeeHome />} />
                    <Route path="profile" element={<EmployeeProfile />} />
                    <Route path="leave-request" element={<LeaveRequestForm />} />
                    <Route path="attendance" element={<AttendanceLogs />} />
                    <Route path="training" element={<TrainingCertificates />} />
                    <Route path="hr-queries" element={<HRQueries />} />
                    <Route path="performance" element={<PerformancePage />} />
                    <Route path="payslip" element={<PayslipPage />} />
                    <Route path="stats" element={<LeaveStats />} />
                    <Route path="WFOffice" element={<WFOCalendar />} />
          
                </Route>
                {/* ✅ Finance Section wrapped in its own layout */}
                <Route path="/finance/*" element={<FinanceLayout />}>
                    <Route index element={<FinanceDashboard />} />
                    <Route path="payroll" element={<PayrollList />} />
                    <Route path="settings" element={<Setting />} />
                </Route>
                {/* ✅ Admin Layout */}
                <Route path="/" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />

                    {/* Employee Routes */}
                    <Route path="employees" element={<EmployeeList />} />
                    <Route path="employees/new" element={<EmployeeForm />} />
                    <Route path="employees/:id/edit" element={<EmployeeForm />} />

                    {/* Attendance Routes */}
                    <Route path="attendance" element={<AttendanceList />} />
                    <Route path="attendance/new" element={<AttendanceForm />} />
                    <Route path="attendance/:id/edit" element={<AttendanceForm />} />

                    {/* Leave Routes */}
                    <Route path="leaves" element={<LeaveList />} />
                    <Route path="leaves/new" element={<LeaveForm />} />
                    <Route path="leaves/:id/edit" element={<LeaveForm />} />

                    {/* Performance Routes */}
                    <Route path="performance" element={<PerformanceList />} />
                    <Route path="performance/new" element={<PerformanceForm />} />
                    <Route path="performance/:id/edit" element={<PerformanceForm />} />

                    {/* Training Routes */}
                    <Route path="training" element={<TrainingList />} />
                    <Route path="training/new" element={<TrainingForm />} />
                    <Route path="training/:id/edit" element={<TrainingForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Master;
