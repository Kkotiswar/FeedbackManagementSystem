const mongoose = require("mongoose");

// Define the User schema using Mongoose
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true // Ensure email uniqueness
    },
    password: {
      type: String,
      required: true
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        default: "user" // Default role is set to "user"
      }
    ]
  })
);

// Export the User model
module.exports = User;
