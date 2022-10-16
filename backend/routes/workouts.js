const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController.js");
const router = express.Router();

//Get all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

// post a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.delete("/:id", updateWorkout);

module.exports = router;
