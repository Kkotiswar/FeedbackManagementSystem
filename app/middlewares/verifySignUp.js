const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

// Middleware function to check for duplicate username or email
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Check if the email is already in use
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }

    // Continue to the next middleware if the email is not in use
    next();
  });
};

// Middleware function to check if specified roles exist
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  // Continue to the next middleware if roles are valid
  next();
};

// Object containing the middleware functions
const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

// Export the verifySignUp object
module.exports = verifySignUp;
