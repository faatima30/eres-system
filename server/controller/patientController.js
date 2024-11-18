const db = require("../db"); 

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const [patients] = await db.execute("CALL GetPatients()");
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients", error });
  }
};


// Get a single patient by ID
exports.getPatientById = async (req, res) => {
  const { id } = req.params;
  try {
    const [patient] = await db.execute("SELECT * FROM patient WHERE id = ?", [id]);
    if (patient.length === 0) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json(patient[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patient", error });
  }
};

// Create a new patient
exports.createPatient = async (req, res) => {
  const { name, tell, gender, guardian_name, guardian_tell, dob, email, user_id, date } = req.body;
  try {
    const [result] = await db.execute("CALL CreatePatient(?, ?, ?, ?, ?, ?, ?, ?, ?)", [
      name, tell, gender, guardian_name, guardian_tell, dob, email, user_id, date,
    ]);
    res.status(201).json({ message: "Patient created successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Error creating patient", error });
  }
};

// Update a patient
exports.updatePatient = async (req, res) => {
  const { id } = req.params;
  const { name, tell, gender, guardian_name, guardian_tell, dob, email, date } = req.body;
  try {
    await db.execute("CALL UpdatePatient(?, ?, ?, ?, ?, ?, ?, ?, ?)", [
      id, name, tell, gender, guardian_name, guardian_tell, dob, email, date,
    ]);
    res.status(200).json({ message: "Patient updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating patient", error });
  }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("CALL DeletePatient(?)", [id]);
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting patient", error });
  }
};
