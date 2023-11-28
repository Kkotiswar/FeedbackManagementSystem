// models/Feedback.js
const mongoose = require("mongoose");
const ObjectId = require("mongodb"); // This import is not being used

// Define the schema for a feedback
const feedbackSchema = new mongoose.Schema({
  tripId: { type: String, required: true }, // Unique identifier for the trip
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
  driverName: { type: String, required: true }, // Name of the driver
  rating: { type: Number, required: true, min: 1, max: 10 }, // Overall rating for the trip
  driverRating: { type: Number, required: true, min: 1, max: 10 }, // Rating specific to the driver
  optionalQuestions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FeedbackQuestion",
    },
  ], // Using FeedbackQuestion schema for optional questions
  createdAt: { type: Date, default: Date.now }, // Timestamp of when the feedback was created
});

// Create a Mongoose model named 'Feedback' based on the schema
const Feedback = mongoose.model("Feedback", feedbackSchema);

// Export the Feedback model
module.exports = Feedback;
