const express = require("express");
const pool = require("./db");
const app = express();
const PORT = 3000;

pool.getConnection((connection, err) => {
  if (connection) {
    console.log("Connected to the database!");
    connection.release();
  } else {
    console.error("Database connection failed:", err.message);
  }
});

app.get("/", async (req, res) => {
    try {
      // Query the users table
      const [rows] = await pool.query("SELECT * FROM users");
      res.json(rows); // Send the result as JSON
    } catch (error) {
      console.error("Error fetching users:", error.message);
      res.status(500).send("An error occurred while fetching users.");
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
