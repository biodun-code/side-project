const express = require("express");
const loginRoutes = require("./login");
const signupRoutes = require("./signup");

const router = express.Router();

// Use login and signup routes
router.use("/", loginRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
