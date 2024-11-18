import React, { useState } from "react";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import profile from "../assets/profile.png";

function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/signin");
  // };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Profile */}
      <div className="topbar-right">
        <div className="profile-container" onClick={handleDropdownToggle}>
          <span className="username">username</span>
          <img src={profile} alt={FaUserCircle} className="profile-img" />
        </div>
        {dropdownOpen && (
          <div className="dropdown">
            <Link to="/profile" className="dropdown-item">
              <FaUserCircle className="dropdown-icon" />
              See Profile
            </Link>
            <button className="dropdown-item logout-button ">
              <IoIosLogOut className="dropdown-icon" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;
