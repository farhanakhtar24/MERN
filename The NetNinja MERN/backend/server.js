require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const workoutRoute = require("./routes/workout");

// Create a new express application instance
const app = express();

// middleware
app.use(express.json()); // to access the req.body in post requests

// Routes
app.use("/api/workouts", workoutRoute);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// The port the express app will listen on
		app.listen(process.env.PORT, () => {
			console.log(
				`Server is running on port ${process.env.PORT} and connected to db!`
			);
		});
	})
	.catch((err) => console.log(err));
