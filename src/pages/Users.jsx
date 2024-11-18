import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserForm from "./UsersForm";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch users based on the selected role
  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/users/allusers`);
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      toast.error("Failed to fetch users!");
    }
    setIsLoading(false);
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
  
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      toast.success("User deleted successfully!");
      await fetchUsers();
    } catch (error) {
      toast.error("Failed to delete user!");
      console.error("Error deleting user:", error); // For debugging
    }
  };
  
  
  

  // Open Add/Edit User Modal
  const openForm = (userId = null) => {
    setEditUserId(userId);
    setShowForm(true);
  };

  // Close the modal
  const closeForm = () => {
    setEditUserId(null);
    setShowForm(false);
  };

  // Handle Search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const lowercasedQuery = e.target.value.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowercasedQuery) ||
        user.username.toLowerCase().includes(lowercasedQuery) ||
        user.email.toLowerCase().includes(lowercasedQuery) ||
        user.user_role.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Define columns for DataTable
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.user_role,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            className="btn btn-primary btn-sm me-2 icons"
            onClick={() => openForm(row.id)}
          >
            <FaEdit /> 
          </button>
          <button
            className="btn btn-danger btn-sm ml-1 icons2"
            onClick={() => handleDelete(row.id)}
          >
            <FaTrashAlt /> 
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h2>Users Management</h2>

      <div className="d-flex justify-content-between mb-4 abcd">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="btn btn-success" onClick={() => openForm()}>
          <FaPlus /> Add User {/* Add Plus Icon */}
        </button>
      </div>

      {/* DataTable */}
      <DataTable
        title="Users List"
        columns={columns}
        data={filteredUsers} 
        progressPending={isLoading}
        pagination
        highlightOnHover
        striped
        responsive
        noDataComponent="No users found"
      />
      {showForm && (
        <div className="modal">
          <div className="">
            <button className="close" onClick={closeForm}>
              &times;
            </button>
            <UserForm
              isEdit={!!editUserId}
              userId={editUserId}
              onClose={closeForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
