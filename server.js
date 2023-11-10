const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/auth");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb+srv://biodun:shuga2020@cluster0.ghvftmq.mongodb.net/lazy")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

// Use the routes
app.use("/", routes);

// Server listening on port 8000
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
