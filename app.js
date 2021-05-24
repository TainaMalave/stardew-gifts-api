const express = require("express");
const mongoose = require("mongoose");
require('dotenv/config');

//Create Express App
const app = express();

// Database
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => console.log('Connected to DB...'));

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

const CharactersRoute = require('./routes/Characters');

app.use('/characters', CharactersRoute);

// Starting Express Server
app.listen(3000, console.log("Listening on port 3000"));
