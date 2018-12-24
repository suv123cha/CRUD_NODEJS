/**
 * Here we are defining the mongoose db for the usage
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defining the db with fields name and price
let ProductSchema = new Schema(
{
	name: 
	{
		type: String, 
		required: true, 
		max: 100
	},
	price: 
	{
		type: Number, 
		required: true
	},
});

// Export the model: Exporting the model so it can be used by other files in our project.
module.exports = mongoose.model("Product", ProductSchema);