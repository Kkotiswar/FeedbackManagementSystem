var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const Feedback = db.Feedback;

// Public access endpoint
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

// User-specific content endpoint
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

// Endpoint for submitting feedback
exports.postFeedback = (req, res) => {
  var userId;
  jwt.verify(req.session.token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    userId = decoded.id;
  });

  const newFeedback = new Feedback({
    tripId: req.body.tripId,
    userId: userId,
    driverName: req.body.driverName,
    rating: req.body.rating,
    driverRating: req.body.driverRating,
    createdAt: new Date(),
  });

  const savedFeedback = newFeedback.save();
  res.json(savedFeedback);
  // Storing feedback submitted by users
};

// Endpoint for fetching all feedbacks
exports.getAllFeedbacks = async (req, res) => {
  const allFeedbacks = await Feedback.find({});
  res.json(allFeedbacks);
  // Logic for getting all feedback from the feedback database
};

// Endpoint for fetching feedback for a particular trip ID
exports.getFeedbackforTripId = async (req, res) => {
  const tripId = req.params?.tripid;
  if (!tripId) res.send(404);
  const feedbacks = await Feedback.find({ "tripId": tripId });
  res.json(feedbacks);
  // Logic for getting feedback for a particular trip ID
};

// Endpoint for fetching aggregated feedback data
exports.getAggregates = async (req, res) => {
  const aggregate = await Feedback.aggregate([
    {
      $group: {
        _id: "$driverName",
        averageRating: { $avg: "$rating" },
        averageDriverRating: { $avg: "$driverRating" },
        totalTrips: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0, // Exclude the default MongoDB _id field
        driverName: "$_id",
        averageRating: 1,
        averageDriverRating: 1,
        totalTrips: 1,
      },
    },
  ]);

  res.json(aggregate);
  // Logic for getting feedback with some aggregates like average trip rating and average driver rating
};

// Endpoint for fetching feedback for a specific driver
exports.getFeedbackForDriver = async (req, res) => {
  const driverFeedbacks = await Feedback.find({ "driverName": req.params.driver });
  res.json(driverFeedbacks);
  // Logic for getting average feedback for the driver with the respective name
};

// Endpoint for fetching all feedback questions
exports.getAllFeedbackQuestions = (req, res) => {
  // Logic for getting feedback questions
};

// Endpoint for fetching one feedback question
exports.getOneQuestion = (req, res) => {
  // Logic for getting one feedback question
};

// Endpoint for editing a feedback question
exports.editFeedbackQuestions = (req, res) => {
  // Editing feedback question
};

// Endpoint for deleting a feedback question
exports.deleteFeedbackQuestion = (req, res) => {
  // Logic for deleting feedback question
};

// Admin-specific content endpoint
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
