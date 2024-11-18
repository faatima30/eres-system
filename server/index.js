const express = require("express");
const pool = require("./db");
const cors = require("cors"); 
const usersRouter = require("./routes/usersRoute"); 
const authRouter = require("./routes/authRoute"); 
const patientRouter = require("./routes/patientRout"); 
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the database!");
    connection.release();
  }
});

// Routes
app.use("/users", usersRouter); 
app.use("/auth", authRouter); 
app.use("/patients", patientRouter); 

// Default route
app.get("/", (req, res) => {
  res.send("Welcome!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
