const mongoose = require("mongoose");

const DishSchema = mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

var Dishes = mongoose.model("Dish", DishSchema);

module.exports = Dishes;
