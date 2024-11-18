const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/usersController");

router.get("/allusers", getAllUsers);
router.get("/:id", getUserById);
router.post("/adduser", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
