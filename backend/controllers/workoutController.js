const Workout = require("../models/workoutModel.js");
const mongoose = require("mongoose");
//Get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createAt: -1 });
  res.status(200).json(workouts);
};
//Get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No such workout" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ err: "No such workout" });
  }
  res.status(200).json(workout);
};
//create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  //add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//delete a workouts
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No such workout" });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ err: "No such workout" });
  }
  res.status(200).json(workout);
};
//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No such workout" });
  }
  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(400).json({ err: "No such workout" });
  }
  res.status(200).json(workout);
};

module.exports = { getWorkouts, getWorkout, createWorkout, deleteWorkout,updateWorkout };
