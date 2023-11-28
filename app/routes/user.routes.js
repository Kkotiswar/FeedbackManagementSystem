// Importing middleware and controller modules
const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  // Middleware to set common headers for handling CORS (Cross-Origin Resource Sharing)
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  // Public route accessible to all users
  app.get("/api/test/all", controller.allAccess);

  // Protected route accessible to authenticated users (with a valid token)
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  // Protected route accessible to admin users (with a valid token and admin role)
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  // Route for submitting feedback (requires a valid token)
  app.post("/api/postfeedback", [authJwt.verifyToken], controller.postFeedback);

  // Routes for fetching feedback data (require a valid token and admin role)
  app.get("/api/getfeedback/all", [authJwt.verifyToken, authJwt.isAdmin], controller.getAllFeedbacks);
  app.get("/api/getfeedback/:tripid", [authJwt.verifyToken, authJwt.isAdmin], controller.getFeedbackforTripId);

  // Route for fetching aggregated feedback data (requires a valid token and admin role)
  app.get("/api/aggregate", [authJwt.verifyToken, authJwt.isAdmin], controller.getAggregates);

  // Route for fetching feedback data for a specific driver (requires a valid token and admin role)
  app.get("/api/feedback/:driver", [authJwt.verifyToken, authJwt.isAdmin], controller.getFeedbackForDriver);

  // Route for fetching feedback questions and updating them
  app.get("/api/feedback-qs/getAll", [authJwt.verifyToken, authJwt.isAdmin], controller.getAllFeedbackQuestions);
  app.get("/api/feedback-qs/", [authJwt.verifyToken, authJwt.isAdmin], controller.getOneQuestion);
  app.put("/api/feedback-qs/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.editFeedbackQuestions);
  app.delete("/api/feedback-qs/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteFeedbackQuestion);

};
