// app.js
const express = require("express");
const bodyParser = require("body-parser");
const product = require("./routes/product"); // Imports routes for the products

// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
/**
 * encodeURIComponent(): It been used for password as an escape mechanism 
*/
let dev_db_url = "mongodb://suva123:" + encodeURIComponent("suva@123@testdb") + "@ds135714.mlab.com:35714/products";

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,  { useNewUrlParser: true }); //New Version
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//This is used for parsing Json response
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use("/products", product);

/**
 * Initializing the port where the code will run
 * After port Initilization, run the command node app.js to check whether the server is running or not
*/
let port = 1234;

app.listen(port, () => 
{
	console.log("Server is up and running on port number " + port);
});