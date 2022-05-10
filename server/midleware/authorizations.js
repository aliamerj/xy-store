const jwt = require("jsonwebtoken");

// not working
const verifyAuthorization = (req, res, next) => {
  const token = req.header("x-auth-token");
  const { _id, isAdmin } = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

  if (_id === req.params.id || isAdmin) {
    next();
  } else {
    res.status(403).json("You do not have a permission to do that");
  }
};

module.exports = {
  verifyAuthorization,
};
