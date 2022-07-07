const express = require("express");
const {
	createWorkout,
	getWorkout,
	getWorkouts,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", getWorkout);

// POST a new single workout
router.post("/", createWorkout);

// DELETE a new single workout
router.delete("/:id", deleteWorkout);

// UPDATE a new single workout
router.patch("/:id", updateWorkout);

module.exports = router;
