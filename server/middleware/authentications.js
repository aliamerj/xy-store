const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json("you are not authenticated!");

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (error, user) => {
    if (error) res.status(403).json("invalid token");
    req.user = user;
    next();
  });
};

module.exports = {
  auth,
};
