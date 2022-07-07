const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// schmea defines the structure of a doscumaent in the db
const workoutsSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// model is a class that allows you to create documents in the db

module.exports = mongoose.model("Workout", workoutsSchema);
