const jwt = require("jsonwebtoken");

const accessToHisOwnData = (req, res, next) => {
  const token = req.cookies.auth;
  const { _id, isAdmin } = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

  if (_id === req.params.id || isAdmin) {
    next();
  } else {
    res.status(403).json("You do not have a permission to do that");
  }
};

module.exports = {
  accessToHisOwnData,
};
