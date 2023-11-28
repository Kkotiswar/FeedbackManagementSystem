// models/FeedbackQuestion.js
const mongoose = require('mongoose');

// Define the schema for a feedback question
const feedbackQuestionSchema = new mongoose.Schema({
    questionText: { type: String, required: true }, // Text of the feedback question (required)
    responseType: { type: String } // Type of response expected for the question
});

// Create a Mongoose model named 'FeedbackQuestion' based on the schema
const FeedbackQuestion = mongoose.model('FeedbackQuestion', feedbackQuestionSchema);

// Export the FeedbackQuestion model
module.exports = FeedbackQuestion;
