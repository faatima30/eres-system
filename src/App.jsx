// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Registration from "./pages/Registration";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Nurses from "./pages/Nurses";
import LabRadiology from "./pages/LabRadiology";
import Departments from "./pages/Departments";
import HRM from "./pages/HRM";
import Finances from "./pages/Finances";
import FacilityManagement from "./pages/FacilityManagement";
import Users from "./pages/Users";
import Developer from "./pages/Developer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/nurses" element={<Nurses />} />
          <Route path="/lab-radiology" element={<LabRadiology />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/hrm" element={<HRM />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/facility-equipment-management" element={<FacilityManagement />} />
          <Route path="/users" element={<Users />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
