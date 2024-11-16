import React, { useState } from "react";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

import profile from "../assets/profile.png";

function Topbar( ) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Maximize/Minimize Sidebar
        <FaBars className="icon" onClick={} />
         */}
        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
      </div>
      {/* Profile */}
      <div className="topbar-right">
        <div className="profile-container" onClick={handleDropdownToggle}>
          <span className="username">fatima</span>
          <img src={profile} alt={FaUserCircle} className="profile-img" />
        </div>
        {dropdownOpen && (
          <div className="dropdown">
            <Link to="/profile" className="dropdown-item">
              <FaUserCircle className="dropdown-icon" />
              See Profile
            </Link>
            <Link to="/logout" className="dropdown-item">
              <IoIosLogOut className="dropdown-icon" />
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;
