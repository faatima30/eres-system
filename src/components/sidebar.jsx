// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaClipboardList,
  FaHospital,
  FaStethoscope,
  FaMicroscope,
  FaUsers,
  FaDollarSign,
  FaTools,
  FaCode,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import logoIcon from "../assets/logo icon.png";

function Sidebar() {
  const [dropdowns, setDropdowns] = useState({
    registration: false,
    patients: false,
    doctorNurses: false,
    labRadiology: false,
    departments: false,
    hrm: false,
    finances: false,
    facilityManagement: false,
    users: false,
    developer: false,
  });

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logoIcon} alt="Logo Icon" />
        <img src={logo} alt="Logo" />
      </div>
      <hr />
      <ul>
        <li>
          <Link to="/">
            <span className="abc"><FaHome /> Dashboard</span>
          </Link>
        </li>
        <li>
          <div onClick={() => toggleDropdown("registration")} className="dropdown-toggle">
            <Link>
              <span className="abc"><FaUserAlt /> Registration</span> {dropdowns.registration ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.registration && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/registration/option1">Option One</Link>
              </li>
              <li>
                <Link to="/registration/option2">Option Two</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleDropdown("patients")} className="dropdown-toggle">
            <Link>
              <span className="abc"><FaClipboardList /> Patients</span> {dropdowns.patients ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.patients && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/patients/addpatient">add new patient</Link>
              </li>
              <li>
                <Link to="/patients/all-patients">all patients</Link>
              </li>
              <li>
                <Link to="/patients/addappointment">add new appointment</Link>
              </li>
              <li>
                <Link to="/patients/all-appointments">all appointments</Link>
              </li>
              <li>
                <Link to="/patients/medical-records">patient's medical records</Link>
              </li>
              <li>
                <Link to="/patients/reports">repors</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleDropdown("doctorNurses")} className="dropdown-toggle">
            <Link>
              <span className="abc"><FaStethoscope /> Doctor & Nurses</span> {dropdowns.doctorNurses ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.doctorNurses && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/doctor-nurses/add-doctor">Add new Doctor</Link>
              </li>
              <li>
                <Link to="/doctor-nurses/list-doctors">List all doctors</Link>
              </li>
              <li>
                <Link to="/doctor-nurses/add-nurse">Add new nurse</Link>
              </li>
              <li>
                <Link to="/doctor-nurses/list-nurses">List all nurses</Link>
              </li>
              <li>
                <Link to="/doctor-nurses/shifts">shifts</Link>
              </li>
              <li>
                <Link to="/doctor-nurses/reports">reports</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleDropdown("labRadiology")} className="dropdown-toggle">
            <Link>
              <span className="abc"><FaMicroscope /> Lab & Radiology</span> {dropdowns.labRadiology ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.labRadiology && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/lab-radiology/lab-test">Lab Tests</Link>
              </li>
              <li>
                <Link to="/lab-radiology/radiology-services">Radiology Services</Link>
              </li>
              <li>
                <Link to="/lab-radiology/lab-results">Lab results</Link>
              </li>
              <li>
                <Link to="/lab-radiology/radiology-services">Radiology Services</Link>
              </li>
              <li>
                <Link to="/lab-radiology/reports">reports</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleDropdown("departments")} className="dropdown-toggle">
            <Link>
             <span className="abc"> <FaHospital /> Departments</span> {dropdowns.departments ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.departments && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/departments/list">Department List</Link>
              </li>
              <li>
                <Link to="/departments/new-department">Add Department</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleDropdown("hrm")} className="dropdown-toggle">
            <Link>
              <span className="abc"><FaUsers /> HRM</span> {dropdowns.hrm ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.hrm && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/hrm/option1">Staff List</Link>
              </li>
              <li>
                <Link to="/hrm/option2">New Hire</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleDropdown("finances")} className="dropdown-toggle">
            <Link>
              <span className="abc"><FaDollarSign /> Finances</span> {dropdowns.finances ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.finances && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/finances/revenue">Revenue</Link>
              </li>
              <li>
                <Link to="/finances/expenses">Expenses</Link>
              </li>
              <li>
                <Link to="/finances/invoices">Invoice</Link>
              </li>
              <li>
                <Link to="/finances/discounts">Discount list</Link>
              </li>
              <li>
                <Link to="/finances/fees">Fee list</Link>
              </li>
              <li>
                <Link to="/finances/assets">assets</Link>
              </li>
              <li>
                <Link to="/finances/payroll">Payroll</Link>
              </li>
              <li>
                <Link to="/finances/bills">Bills</Link>
              </li>
              <li>
                <Link to="/finances/banks">Bank accounts</Link>
              </li>
              <li>
                <Link to="/finances/reports">Reports</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleDropdown("facilityManagement")} className="dropdown-toggle">
            <Link>
             <span className="abc"> <FaTools /> Facility </span> {dropdowns.facilityManagement ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.facilityManagement && (
            <ul className="dropdown-menu">
               <li>
                <Link to="/facility-equipment-management/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/facility-equipment-management/beds">Beds</Link>
              </li>
              <li>
                <Link to="/facility-equipment-management/equipment">Equipment List</Link>
              </li>
              <li>
                <Link to="/facility-equipment-management/maintanence">Maintenance</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleDropdown("users")} className="dropdown-toggle">
            <Link>
             <span className="abc"> <FaUserAlt /> Users</span> {dropdowns.users ? <FaAngleUp className="dropicon" /> : <FaAngleDown className="dropicon" />}
            </Link>
          </div>
          {dropdowns.users && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/users/users">User List</Link>
              </li>
              <li>
                <Link to="/users/new-user">Add User</Link>
              </li>
              <li>
                <Link to="/users/permissions">User permission</Link>
              </li>
              <li>
                <Link to="/users/deleted-records">Deleted records</Link>
              </li>
              <li>
                <Link to="/users/updated-records">Updated records</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
