const express = require("express");
const router = express.Router();
const {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient,
  } = require("../controller/patientController");

router.post("/addpatient",createPatient); 
router.get("/allpatient", getPatients);
router.get("/:id", getPatientById);
router.put("/:id", updatePatient); 
router.delete("/:id", deletePatient); 

module.exports = router;
