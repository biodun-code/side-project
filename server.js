const express = require("express");
const cors = require("cors");
const  chats = require("./data/data");
const mongoose = require("mongoose");
const routes = require("./routes/auth");

require('dotenv').config()

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
  })
);




// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(() => {
    console.log('Failed to connect to MongoDB');
  });

// Use the routes
app.use("/", routes);



app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

// Server listening on port 8000
const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
