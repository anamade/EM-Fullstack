import {Toaster} from "react-hot-toast"
import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./Pages/Layout.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import Employees from "./Pages/Emploees.jsx"
import Attendance from "./Pages/Attendance.jsx"
import Leaves from "./Pages/Leave.jsx"
import Payslips from "./Pages/Payslips.jsx"
import Settings from "./Pages/Settings.jsx"
import LoginLanding from "./Pages/LoginLanding.jsx" 
import LoginForm from "./componets/LoginForm.jsx"
import PrintPayslip from "./Pages/PrintPayslip.jsx"

const App = () => {
  return (
    <>
    <Toaster/>
    <Routes>
     <Route path="/login" element={<LoginLanding />} />
     <Route path="/login/admin" element={<LoginForm role="admin" title="Admin Portal"
     subtitle="Sign in to manage the organization" />} />
     <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal"
     subtitle="Sign in to access your account" />} />


     <Route element={<Layout />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/payslips" element={<Payslips />} />
        <Route path="/settings" element={<Settings />} />
     </Route>
     <Route path="/print/payslips/:id" element={<PrintPayslip />} />
      <Route path="*" element={<Navigate to= "/dashboard" replace/>} />
    </Routes>
    </>
  )
}

export default App