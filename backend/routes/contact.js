const express = require("express");

//controller functions
const { signupContact } = require("../controllers/contactController");
const router = express.Router();

//signup route
router.post("/signup", signupContact);

module.exports = router;
