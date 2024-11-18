import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserForm = ({ isEdit, userId, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    gender: "",
    user_role: "",
  });

  useEffect(() => {
    if (isEdit && userId) {
      // Fetch user data for editing
      axios
        .get(`http://localhost:3000/users/${userId}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          toast.error("Failed to fetch user data!");
        });
    }
  }, [isEdit, userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        // Update user
        await axios.put(`http://localhost:3000/users/${userId}`, formData);
        toast.success("User updated successfully!");
      } else {
        // Add new user
        await axios.post("http://localhost:3000/users/adduser", formData);
        toast.success("User added successfully!");
      }
      onClose(); // Close modal and refresh user list
    } catch (error) {
      toast.error("Failed to save user data!");
    }
  };

  return (
    <div className="modal-content ">
      <h3 className="text-center mb-4">{isEdit ? "Edit User" : "Add User"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 hello">
          <label className="form-label">Name: </label>
          <input
            type="text"
            name="name"
            className="form-control form-control-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username: </label>
          <input
            type="text"
            name="username"
            className="form-control form-control-lg"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        {!isEdit && (
          <div className="mb-3">
            <label className="form-label">Password: </label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">Email: </label>
          <input
            type="email"
            name="email"
            className="form-control form-control-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender: </label>
          <select
            name="gender"
            className="form-select form-select-lg"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Role:</label>
          <select
            name="user_role"
            className="form-select form-select-lg"
            value={formData.user_role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="d-flex justify-content-between ">
          <button type="submit" className="btn btn-success btn-lg gg">
            {isEdit ? "Update User" : "Add User"}
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
