const express = require("express");
const loginRoutes = require("../routes/login");
const signupRoutes = require("../routes/signup");

const router = express.Router();

// Use login and signup routes
router.use("/", loginRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
