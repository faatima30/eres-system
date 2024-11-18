const db = require("../db");
const bcrypt = require('bcrypt');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.query("CALL GetAllUsers()");
    res.json(rows[0]); 
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("CALL GetUserById(?)", [id]);
    if (rows[0].length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0][0]);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err });
  }
};

// Add a new user
const createUser = async (req, res) => {
  const { name, username, password, email, gender, user_role, image } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query("CALL AddUser(?, ?, ?, ?, ?, ?, ?)", [
      name,
      username,
      hashedPassword,
      email,
      gender,
      user_role,
      image || null,
    ]);
    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding user", error: err });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, username, email, gender, user_role, image } = req.body;
  try {
    const [result] = await db.query("CALL UpdateUser(?, ?, ?, ?, ?, ?, ?)", [
      id,
      name,
      username,
      email,
      gender,
      user_role,
      image || null,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params; 
  try {
    await db.query("CALL DeleteUser(?)", [id]); 
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
