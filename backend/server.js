const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts.js");
const app = express();

//!routes
app.use("api/workouts", workoutRoutes);
//!middleware
app.use(express.json());
//! connect to db
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connect to db && listening on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
