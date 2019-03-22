const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const { mongoURI: db } = process.env;

// connects our back end code with the database
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected."))
  .catch(err => console.log(err));

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
