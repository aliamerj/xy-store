const jwt = require("jsonwebtoken");

// not working
const verifyAuthorization = (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
  } else {
    res.status(403).json("You do not have a permission to do that");
  }
};

module.exports = {
  verifyAuthorization,
};
