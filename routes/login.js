const express = require("express");
const collection = require("../models/mongo");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email });

    if (!user) {
      res.json("notexist");
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    }
  } catch (error) {
    res.json("fail");
  }
});

module.exports = router;
