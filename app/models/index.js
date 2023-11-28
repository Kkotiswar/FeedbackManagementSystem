const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Create a database object
const db = {};

// Set the Mongoose instance in the database object
db.mongoose = mongoose;

// Include the User, Role, and Feedback models in the database object
db.user = require("./user.model");
db.role = require("./role.model");
db.Feedback = require("./feedback.model");

// Define user roles as constants
db.ROLES = ["user", "admin"];

// Export the database object
module.exports = db;
