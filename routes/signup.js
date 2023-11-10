const express = require("express");
const collection = require("../models/mongo");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const data = {
    email,
    password: hashedPassword,
  };

  try {
    const check = await collection.findOne({ email });

    if (check) {
      res.json("exist");
    } else {
      await collection.insertMany([data]);
      res.json("notexist");
    }
  } catch (error) {
    res.json("fail");
  }
});

module.exports = router;
